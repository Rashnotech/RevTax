import { request } from "express";


const nodemailer = require('nodemailer')

class Mailer {
    constructor () {
        cty_code = '+234';
        host = '';
        port = '';
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
                'X-RapidAPI-Key': '',
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
    
    static mail (email, message, receiver) {
        const transporter = nodemailer.createTransport(
            {
                host: this.host,
                port: this.port,
                secure: false,
                auth: {
                    user: '',
                    pass: '',
                }
            }
        );
        const options = {
            from: 'RevTax',
            to: receiver,
            subject: message.title,
            html: message.body
        }
        transporter.sendMail(options, )
    }
}


export default Mailer;