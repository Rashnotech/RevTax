import mongoose from 'mongoose';
import { expect } from 'chai';
import Business from './models/business.js';

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/FileStorage' );

// Test suite for Business model
describe('Business Model Tests', () => {
  // Clear the database before each test
  beforeEach(async () => {
    await Business.deleteMany({});
  });

  // Test case for creating a new business
  it('creates a new business', async () => {
    const businessData = {
      user_id: '123',
      name: 'Tino Tech Solutions',
      type: 'IT Services',
      isregistered: true,
      state: 'Lagos',
      LGA: 'Ikeja'
    };

    const business = new Business(businessData);
    const savedBusiness = await business.save();

    expect(savedBusiness._id).to.exist;
    expect(savedBusiness.name).to.equal(businessData.name);
    expect(savedBusiness.type).to.equal(businessData.type);
    expect(savedBusiness.isregistered).to.equal(businessData.isregistered);
    expect(savedBusiness.state).to.equal(businessData.state);
    expect(savedBusiness.LGA).to.equal(businessData.LGA);
    expect(savedBusiness.createdAt).to.exist;
    expect(savedBusiness.updatedAt).to.exist;
  });

  // Close the connection after all tests
  after(() => {
    mongoose.connection.close();
  });
});

