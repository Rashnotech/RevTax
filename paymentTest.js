import mongoose from 'mongoose';
import { expect } from 'chai';
import Payment from './Payment.js';

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/FileStorage', { useNewUrlParser: true, useUnifiedTopology: true });

describe('Payment Model Tests', () => {
  // Test case for creating a new payment
  it('creates a new payment', async () => {
    const uniqueId = new mongoose.Types.ObjectId(); // Unique identifier for the test
    const paymentData = {
      user_id: uniqueId.toString(), 
      amount: 100,
      payment_method: 'card',
      status: 'completed'
    };

    const payment = new Payment(paymentData);
    const savedPayment = await payment.save();

    // Assertions
    expect(savedPayment._id).to.exist;
    expect(savedPayment.user_id).to.equal(paymentData.user_id);
    expect(savedPayment.amount).to.equal(paymentData.amount);
    expect(savedPayment.payment_method).to.equal(paymentData.payment_method);
    expect(savedPayment.status).to.equal(paymentData.status);
    expect(savedPayment.created_at).to.exist;
  });


  after(() => {
  });
});
