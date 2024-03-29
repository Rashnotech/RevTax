import 'dotenv/config';

const config = {
    server: {
        host: process.env.HOST,
        user: process.env.USERNAME,
        pass: process.env.PASS,
        port: process.env.PORT,
        apiKey: process.env.APIKEY
    }
};

export default config;
