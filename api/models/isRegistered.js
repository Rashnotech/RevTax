import mongoose from '../utils/db.js'
const { Schema } = mongoose;

import Business from './business.js';

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
