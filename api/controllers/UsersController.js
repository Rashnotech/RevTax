import Mailer from "../services/MailService";


class UsersController {
    static async register (req, res, next) {
        const { 
            firstname,
            lastname,
            password,
            
        } = req.body;

        
        const user = await User.findOne({ email, telephone });
        if (!user) return next(errorHandler(400, 'User already exist'));
    }
}

export default UsersController