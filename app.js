const mongoose = require('mongoose');

const database = 'FileStorage';
const connectionString = `mongodb://127.0.0.1:27017/${database}`;

// Connect to MongoDB without deprecated options
mongoose.connect(connectionString)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Connection event handlers
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Handle termination signals
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected due to application termination');
    process.exit(0);
  });
});
