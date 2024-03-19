import Mailer from "../services/MailService.js";
import sha1 from 'sha1';

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
            if (user) res.status(400).json({error: 'User already exist'});
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
            const newUser = new User({ ...data});
            await newUser.save();
            return res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
        return res.status(400).json({error: error.message}); 
        }
    }
}

export default UsersController