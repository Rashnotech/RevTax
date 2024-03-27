import express from 'express';
import router from './routes/index.js'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import specs from './swagger.js';
import cookieParser from 'cookie-parser';

const app = express()
const port = 5000

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))  

app.listen(port, () => {
  console.log(`server running on localhost:${port}`)
});

export default app;
