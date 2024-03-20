import PaymentController from '../../controllers/PaymentController.js'
import User from '../../../models/users.js'

const testUser = {
  firstname: "Inimfon",
  lastname: "Ebong",
  telephone: '09168848807',
  email: 'ebonginimfon8@gmail.com',
  type: 1,
  address: "Cross river state"
}

const testPayment = {
  userId: "6",
  amount: 5000
}

describe('test PaymentController', () => {
  before(async (done) => {
    await User.deleteOne({telephone: testUser.telephone})
    done()
  });

  describe('test makePayment', () => {
    it('test Missing userId', (done) => {
      request.post('/payment').send(testPayment)
      .expect(400)
      .end((err, res) => {
	if (err) {
	  return done(err)
	}
	expect(res.body).to.deep.equal({ error: "Missing userId" });
	done();
      })
    });
  })
})

