import Mailer from "../services/MailService.js";
import sha1 from 'sha1';
import auth from '../auth/auth.js'
import User from '../models/users.js'



const validateInput = (input, requiredFields, res) => {
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
            validateInput(data, requiredFields, res);
            const {email, telephone} = data;
            if (!email.includes('@')) return res.status(400).json({error: 'Invalid email address'});
            const mobile = Mailer.isMobile(telephone);
            if (!mobile) return res.status(400).json({error: 'Invalid phone number'});
            const user = await User.findOne({ $or: [{ email }, { mobile }] });
            if (user) return res.status(400).json({error: 'User already exist'});
            const token = Mailer.generateToken();
            const response = await Mailer.sms(mobile, `Welcome to Rev platform. Your otp is ${token}`);
            if (response.error) {
                const mailResponse = await Mailer.mail(email, {
                    title: 'RevTax',
                    body: `<p>Welcome to Rev platform. Your otp is ${token} </p>`
                });
                if (mailResponse.error) return res.status(500).json({error:"An error occured while sending otp"});
            }
            data.password = sha1(data.password);
            data.telephone = mobile;
	    data.token = token
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

    const { email, password } = data

    let { telephone } = data
    if (!email && !telephone) {
      return res.status(400).json({'error': 'Missing email and telephone'})
    }
    if (email && !email.includes('@')) return res.status(400).json({error: 'Invalid email address'});
    if (telephone && !Mailer.isMobile(telephone)) {
      return res.status(400).json({error: 'Invalid phone number'});
    }

    if (telephone) {
      telephone = Mailer.isMobile(telephone)
    }

    if (!password) {
      return res.status(400).json({'error': 'Missing password'})
    }
    const users = await User.find({})
    const user = await User.findOne({ $or: [ { email }, { telephone } ] });
    if (!user) return res.status(404).json({'error': 'Not found'})
    if (sha1(password) !== user.password) return res.status(400).json({'error': 'Wrong password'})

    auth.createToken({ id: user._id}).then((token) => {
      return res.json({ token });
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
	  console.log(user)
    return res.json(user)
  }

  static async deleteUser(req, res) {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({error: "Not Found"})
    
    await User.deleteOne({_id: userId})
    return res.json({})
  }
}

export default UsersController
