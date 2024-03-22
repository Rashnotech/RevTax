import mongoose from '../utils/db.js';
const { Schema } = mongoose;

const paymentSchema = new Schema({
  userId: { type: String, required: true },
  amount: { type: Number, default: 0 },
  payment_method: { type: String, default: 'card' },
  status: { type: String, default: 'pending', required: true },
  created_at: { type: Date, default: Date.now } 
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
