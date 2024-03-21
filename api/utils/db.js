import mongoose from 'mongoose'
import cors from 'cors'
/*async function connectMongo() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/rev_tax')
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}*/

mongoose.connect('mongodb://127.0.0.1:27017/rev_tax').then(() => {
  console.log("connecting to mongodb...")
}).catch((err) => {
  console.log(err)
});

mongoose.connection.on('connected', err => {
   console.log("\tconnected to mongodb");
});

mongoose.connection.on('error', err => {
  console.log(err);
});

export default mongoose;
