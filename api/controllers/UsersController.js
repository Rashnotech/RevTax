import Mailer from "../services/MailService";
import User from "../models/User";
import bcrypt from "bcrypt";

class UsersController {
    static async register (req, res, next) {
        const data = req.body;
        
        const requiredFields = [
            'firstname', 'lastname',
            'email', 'telephone',
            'password', 'type', 'address'
        ];

        this.validateInput(data, requiredFields);
        if (!data.email.includes('@')) return next(errorHandler(400, 'Invalid email address'));
        const mobile = Mailer.isMobile(data.telephone);
        if (!mobile) return next(errorHandler(400, 'Invalid phone number'));
        const user = await User.findOne({ $or: [{ email }, { mobile }] });
        if (!user) return next(errorHandler(400, 'User already exist'));
        const token = Mailer.generateToken();
        const response = await Mailer.sms(mobile, `Welcome to Rev platform. Your otp is ${token}`);
        if (response.error) {
            const res = await Mailer.mail(email, {
                title: 'RevTax',
                body: `<p>Welcome to Rev platform. Your otp is ${token} </p>`
            });
            if (res.error) return next(errorHandler(500, "An error occured while sending otp"));
        }
        data['password'] = bcrypt.hash(data.password, 10);
        data['telephone'] = mobile;
        const newUser = new User({ ...data});
        await newUser.save();
        return res.status(201).json({ message: 'User created successfully' });   
    }

    validateInput (input, requiredFields) {
        for (const key in input) {
            if (key in requiredFields && input.hasOwnProperty(key)) {
                const element = input[key];
                if (!element) return next(errorHandler(400, `${key} is required`));
            }
        }
    }
}

export default UsersController