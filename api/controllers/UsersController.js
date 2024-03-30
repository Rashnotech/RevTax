import Mailer from "../services/MailService.js";
import TextService from "../services/TextService.js";
import sha1 from 'sha1';
import auth from '../auth/auth.js'
import User from '../models/users.js'




const validateInput = (input, requiredFields) => {
    for (const field in requiredFields) {
        const type = requiredFields[field];
        if (!type) {
            delete input[field];
        } else if (type === 'required' && !input[field]) {
            throw new Error(`${field} is required`);
        }
    }
}


class UsersController {
    static async register (req, res) {
      const data = req.body;

      const requiredFields = {   
            firstname: 'required',
            lastname: 'required',
            email: 'required',
            telephone: 'required',
            password: 'required',
            type: 'required',
            address: 'required'
      };

      try {
        validateInput(data, requiredFields);
        
        const {email, telephone} = data;

        if (!email.includes('@')) return res.status(400).json({error: 'Invalid email address'});
        
        const mobile = TextService.isMobile(telephone);
        if (!mobile) return res.status(400).json({error: 'Invalid phone number'});
        
        const existingUser = await User.findOne({ $or: [{ email }, { 'telephone': mobile }] });
        if (existingUser) return res.status(400).json({error: 'User email or mobile already exist'});
        
        const token = Mailer.generateToken();
        //const smsResponse = await TextService.sms(mobile, `Welcome to Rev platform. Your otp is ${token}`);
        //Twilo require a paid account to send sms
        //if (smsResponse.status !== 'success') {}
        const mailResponse = await Mailer.mail(email,
          {
            title: 'RevTax',
            body: `
              <html>
              <body>
                <h1>RevTax Email Verification</h1>
                Hi ${email}, <br>
                We've received your request due to attempt to create an account.
                <p> Your OTP code is: ${token} </p>
                If you didn't attempt signing up this code, you can safely ignore this email. Someone else might have typed your email address by mistake.
                Thanks <br>
                <strong>RevTax Team</strong>
              </body>
              <html>
            `
        });
        if (mailResponse.error) return res.status(500).json({error: 'An error occured while sending otp'});
        
        data.password = sha1(data.password);
        data.telephone = mobile;
        data['token'] = token;

        const newUser = new User({ ...data});
        await newUser.save();

        return res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        return res.status(400).json({error: error.message}); 
      }
    }


  /**
   * class method for loging in
   * On success return a token
   */

  static async login(req, res) {
    const data = req.body;

    const { password } = data
    let { record } = data

    if (!record) {
      return res.status(400).json({'error': 'Missing email and telephone'})
    }

    if (TextService.isMobile(record)) {
      record = TextService.isMobile(record)
    }

    if (!password) {
      return res.status(400).json({'error': 'Missing password'})
    }
    const user = await User.findOne({ $or: [ { email: record }, { telephone: record } ] });
    if (!user) return res.status(404).json({'error': 'Not found'})
    if (sha1(password) !== user.password) return res.status(400).json({'error': 'Wrong password'})
    auth.createToken({ email: user.email}).then((token) => {
      user.password = undefined;
      return res.json({ user, token })
    }).catch((err) => {
      return res.status(400).json({ error: "Login failed" });
    });
  }

  static async getUser(req, res) {
    const { userId } = req.params

    if (typeof userId !== 'string') return res.status(400).json({error: "userId must be a string"})

    const user = await User.findOne({_id: userId })

    if (!user) return res.status(404).json({error: "Not Found"})
    return res.json(user)
  }

  static async getAllUsers(req, res) {
    const users = await User.find({});

    return res.json(users || [])
  }

  static async updateUser(req, res) {
    const { userId } = req.params;

    if (!userId) return res.status(400).json({error: "Missing userId"})

    if (typeof userId !== 'string') return res.status(400).json({error: "userId must be a string"})
    
    const data = req.body || {}

    const restricted = ['createdAt', 'telephone', 'type']

    for (const [key, value] of Object.entries(data)) {
      if (restricted.includes(key)) {
	      delete data[key]
      }
    }
    const user = await User.findByIdAndUpdate(userId, {...data }, {new: true})
    if (!user) return res.status(404).json({error: "Not Found"})
    return res.json(user)
  }

  static async deleteUser(req, res) {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({error: "Not Found"})
    
    await User.deleteOne({_id: userId})
    return res.json({})
  }

  static logout(req, res) {
    try {
      res.clearCookie('revTax');
      return res.json({message: 'Logged out successfully'});
    } catch (error) {
      return res.status(400).json({error});
    } 
  } 

}

export default UsersController