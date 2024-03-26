import express from 'express';
import router from './routes/index.js'
import businessRouter from './routes/businessroutes.js'
import cors from 'cors'
import mongoose from './utils/db.js'
import swaggerUi from 'swagger-ui-express';
import specs from './swagger.js';

const app = express()
const port = 5000

app.use(express.json());
app.use(cors());
app.use(router);
  
app.use(businessRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))  

app.listen(port, () => {
  console.log(`server running on localhost:${port}`)
});

export default app;
