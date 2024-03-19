import mongoose from 'mongoose';

import User from './models/users.js';

mongoose.connect('mongodb://127.0.0.1:27017/FileStorage');

// Create a new user instance
const newUser = new User({
  firstname: 'Ali',
  lastname: 'Tech',
  phone: '1234567880',
  email: 'Ali.techy@example.com',
  type: 2,
  address: '123 Main St'
});

newUser.save()
  .then(() => {
    console.log('User saved successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error saving user:', err);
    mongoose.connection.close();
  });
