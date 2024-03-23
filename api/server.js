import express from 'express';
import router from './routes/index.js'
import cors from 'cors'
<<<<<<< HEAD

=======
import mongoose from './utils/db.js'
import swaggerUi from 'swagger-ui-express';
import specs from './swagger.js';
>>>>>>> c2767214471dad8c873ce404b038797a804889f6

const app = express()
const port = 5000

app.use(express.json());
<<<<<<< HEAD
app.use(cors());
app.use(router);
  
=======
//app.use(cors());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))  

>>>>>>> c2767214471dad8c873ce404b038797a804889f6
app.listen(port, () => {
  console.log(`server running on localhost:${port}`)
});

export default app;