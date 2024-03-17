import axios from 'axios';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

const config = require('../config/default.json');

class Mailer {
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
        const tel = parseInt(number);
        if (tel.length < 10) {
            throw new Error('Not a valid telephone number');
        }
        if (tel){}
        const options = {
            method: 'POST',
            url: 'https://rapid-sms.api.p.rapid.com/sms',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': this.rapidKey,
                'X-RapidAPI-Host': 'rapid-sms-api.p.rapidapi.com'
            },
            data: {
                phone_number: `${this.cty_code}${tel}`,
                text: message
            }
        };
        try {
            const response = await axios.request(options)
            console.log(response.data);
        } catch (err) {
            return {error: err}
        }
    }
    
    static mail (email, message) {
        const transporter = nodemailer.createTransport(
            {
                host: this.host,
                port: this.port,
                secure: false,
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
        transporter.sendMail(options, )
    }
}

console.log(config.server.host)

export default Mailer;
