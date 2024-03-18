import axios from 'axios';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

const config = require('../config/default.json');

class Mailer {
    /**
     * a class that handles sms/email validation
     * sms - static class method
     * mail - static class method
     */
    constructor () {
        cty_code = '+234';
        host = config.server.host;
        port = config.server.port;
        rapidKey= config.server.api;
        account = {
            user: config.server.user,
            pass: config.server.pass
        };
    }

    static async sms (number, message) {
        const mobileDigit = this.isMobile(number);
        if (!mobileDigit) {
            throw new Error('Not a valid phone number');
        } 
        const options = {
            method: 'POST',
            url: 'https://rapid-sms.api.p.rapid.com/sms',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': this.rapidKey,
                'X-RapidAPI-Host': 'rapid-sms-api.p.rapidapi.com'
            },
            data: {
                phone_number: mobileDigit,
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
                host: this.host,
                port: this.port,
                secure: true,
                auth: {
                    user: this.account.user,
                    pass: this.account.pass,
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
        return {error: response}
    }
    
    static isMobile (number) {
        if (number.startsWith(0)) number = number.slice(1);
        const tel = `${this.cty_code}${number}`;
        const mobileRegex = /^\+\d{1,3}\d{10}$/;
        if (mobileRegex.test(tel)) {
            return false;
        }
        return tel;
    }
}

export default Mailer;
