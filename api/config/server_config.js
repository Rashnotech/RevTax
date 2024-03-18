import 'dotenv/config';

const config = {
    server: {
        host: process.env.HOST,
        user: process.env.USER,
        pass: process.env.PASS,
        port: process.env.PORT,
        apiKey: process.env.APIKEY
    }
};

export default config;