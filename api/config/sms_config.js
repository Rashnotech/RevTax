import 'dotenv/config';

const config = {
    twilio: {
        accountSID: process.env.TWILIO_ACCOUNT_SID,
        authSID: process.env.TWILIO_AUTH_TOKEN,
    }
};

export default config;