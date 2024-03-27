import mongoose from '../utils/db.js';
const { Schema } = mongoose;

const businessTypeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  fee: {type: Number, required: true },
}, { timestamps: true });

const BusinessType = mongoose.model('BusinessType', businessTypeSchema);

export default BusinessType;
