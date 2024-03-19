import mongoose from 'mongoose';
const { Schema } = mongoose;

import Business from './Business';

const isRegisteredSchema = new Schema({
  business: {
    type: Schema.Types.ObjectId,
    ref: 'Business',
    required: true
  },
  cac: { type: Number, required: true },
  tin: { type: Number, required: true }
}, { timestamps: true });

const IsRegistered = mongoose.model('IsRegistered', isRegisteredSchema);

export default IsRegistered;
