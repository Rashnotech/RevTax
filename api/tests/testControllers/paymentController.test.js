import PaymentController from '../../controllers/PaymentController.js'
import User from '../../models/users.js'

const testUser = {
  firstname: "Inimfon",
  lastname: "Ebong",
  telephone: '09168848807',
  password: 'password',
  email: 'ebonginimfon8@gmail.com',
  type: 1,
  address: "Cross river state"
}
const user = new User(testUser)
/*const testPayment = {
  userId: "6",
  amount: 5000
}*/

describe('test PaymentController', () => {
  before((done) => {
    User.find({telephone: testUser.telephone}).then((user) => {
      done()
    }).catch((err) => {
      done(err)
    })
  })

  describe('test makePayment', () => {
    it('test Missing userId', (done) => {
      const testPayment = {
	amount: 5000
      }
      request.post('/payments').send(testPayment)
      .expect(403)
      .end((err, res) => {
	if (err) {
	  done(err)
	}
	expect(res.body).to.deep.equal({ error: "Missing userId" });
	done();
      })
    });
  })
})

