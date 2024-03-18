import axios from 'axios';
import nodemailer from 'nodemailer';
import config from '../config/server_config.cjs';



class Mailer {
    /**
     * a class that handles sms/email validation
     * sms - static class method
     * mail - static class method
     */

    static async sms (number, message) {
        const options = {
            method: 'POST',
            url: 'https://rapid-sms.api.p.rapid.com/sms',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'd34abcdaa6msh40b38e6fb636a35p1c362djsn4d6591f044c0',
                'X-RapidAPI-Host': 'rapid-sms-api.p.rapidapi.com'
            },
            data: {
                phone_number: number,
                text: message
            }
        };
        try {
            const response = await axios.request(options)
            return response
        } catch (err) {
            return {error: err}
        }
    }
    
    static async mail (email, message) {
        /**
         * @param {string} receiver email
         * @param {string} message
         */
        const transporter = nodemailer.createTransport(
            {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'pense.blogpost@gmail.com',
                    pass: 'nigyjnsceqoooqty'
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

    static isMobile (number) {
        if (number.startsWith(0)) number = number.slice(1);
        const cty_code = '+234';
        const tel = `${cty_code}${number}`;
        const mobileRegex = /^\+\d{1,3}\d{10}$/;
        if (mobileRegex.test(tel)) {
            return tel;
        }
        return false;
    }
    
    static generateToken () {
        return Math.floor(1000 + Math.random() * 9000);
    }
}

export default Mailer;
