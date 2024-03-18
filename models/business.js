import mongoose from 'mongoose';
const { Schema } = mongoose;

const businessSchema = new Schema({
  user_id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  isregistered: { type: Boolean, default: false },
  state: { type: String, required: true },
  LGA: { type: String, required: true }
}, { timestamps: true });

const Business = mongoose.model('Business', businessSchema);

export default Business;
