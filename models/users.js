import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  token: { type: String, default: '' },
  validated: { type: Boolean, default: false },
  photo: String,
  type: { type: Number, enum: [1, 2, 3], required: true },
  address: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
