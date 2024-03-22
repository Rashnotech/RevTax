import mongoose from '../utils/db.js';

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  telephone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  token: { type: String, default: '' },
  validated: { type: Boolean, default: false },
  photo: String,
  type: { type: Number, enum: [1, 2, 3], required: true },
  address: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
