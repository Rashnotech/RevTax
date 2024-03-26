import mongoose from '../utils/db.js';
const { Schema } = mongoose;

const businessSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  isregistered: { type: Boolean, default: false },
  state: { type: String, required: true },
  LGA: { type: String, required: true }
}, { timestamps: true });

const Business = mongoose.model('Business', businessSchema);

export default Business;
