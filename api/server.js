import express from 'express';
import router from './routes/index.js'
import mongoose from 'mongoose'

async function connectMongo() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/rev_tax')
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}


mongoose.connection.on('connect', err => {
   console.log("db connected");
});

mongoose.connection.on('error', err => {
  console.log(err);
});
const app = express()
const port = 5000

app.use(express.json());
app.use(router);
connectMongo().then(() => {
  app.listen(port, () => {
    console.log(`server running on localhost:${port}`)
  });
})
export default app;
