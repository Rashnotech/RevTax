import nodemailer from 'nodemailer';
import config from '../config/server_config.js';



class Mailer {
    /**
     * a class that handles email validation
     * mail - static class method
     */
    static async mail (email, message) {
        /**
         * @param {string} receiver email
         * @param {string} message
         */
        const transporter = nodemailer.createTransport(
            {
                host: config.server.host,
                port: config.server.port,
                secure: true,
                auth: {
                    user: config.server.user,
                    pass: config.server.pass
                }
            }
        );
        const options = {
            from: 'RevTax',
            to: email,
            subject: message.title,
            html: message.body
        }
        const response = await transporter.sendMail(options)
        if (response.messageId) {
            return response
        }
        return {error: 'Failed to send email'};
    }
    
    static generateToken () {
        return Math.floor(100000 + Math.random() * 900000);
    }
}

export default Mailer;
