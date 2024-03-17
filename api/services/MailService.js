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
        if (number.startsWith(0)) number = number.slice(1);
        const tel = `${this.cty_code}${number}`;

        if (!this.isMobile(tel)) {
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
                phone_number: tel,
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
    
    static mail (email, message) {
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
        transporter.sendMail(options)
    }
    
    isMobile (number) {
        const mobileRegex = /^\+\d{1,3}\d{10}$/;
        if (mobileRegex.test(number)) {
            return false
        }
        return true
    }
}

export default Mailer;
