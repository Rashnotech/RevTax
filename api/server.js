import express from 'express';
import router from './routes/index.js'

const app = express()
const port = 5000

app.use(express.json());
app.use(router);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
app.listen(port);

export default app;
