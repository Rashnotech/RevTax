import express from 'express';
import router from './routes/index.js'
import businessRouter from './routes/businessroutes.js'
import BusinessTypeRouter from './routes/businessTyperoutes.js'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import specs from './swagger.js';
import cookieParser from 'cookie-parser';

const app = express()
const port = 5000

// Middleware function to log incoming requests and responses

app.use((req, res, next) => {
    // Log the request method and URL
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Create a variable to store the response status code
    let statusCode;

    // Listen for the 'finish' event on the response object
    res.on('finish', () => {
        // Log the response status code
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${statusCode}`);
    });

    // Override the res.end function to capture the response status code
    const originalEnd = res.end;
    res.end = function(...args) {
        // Capture the response status code before calling the original res.end function
        statusCode = res.statusCode;
        // Call the original res.end function with the provided arguments
        originalEnd.apply(res, args);
    };

    // Call the next middleware function in the chain
    next();
});

app.use(express.json());
//app.use(cookieParser());
app.use(cors());
app.use(router);
  
app.use(businessRouter);
app.use(BusinessTypeRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))  

app.listen(port, () => {
  console.log(`server running on localhost:${port}`)
});

export default app;
