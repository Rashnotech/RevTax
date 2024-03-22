import PaymentController from '../../controllers/PaymentController.js'
import User from '../../models/users.js'
import sha1 from 'sha1';


const testUser = {
  firstname: "Inimfon",
  lastname: "Ebong",
  telephone: '09168848877',
  password: sha1('password'),
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
    const user = new User(testUser)
    user.save().then(() => {
      done()
    }).catch((err) => {
      done(err)
    });
  })

  describe('test makePayment', () => {
    it('test correct credentials', (done) => {
      const testUser = {
	telephone: '09168848807',
	email: 'ebonginimfon8@gmail.com',
	password: 'password',
      }
      request.post('/auth/login').send({...testUser})
	.expect(200)
	.end((err, res) => {
	  if (err) {
	    done(err)
	  }
	  User.findOne({ email: 'ebonginimfon8@gmail.com' }).then((user) => {
	    const testPayment = {
	    userId: user._id,
	    amount: 5000
	    }
		  console.log(res.text)
	    request.post('/payments').send(testPayment)
	      .set(Authorization, res.token)
	      .expect(200)
	      .end((err, res) => {
		if (err) {
		  done(err)
		}
		console.log(res)
		expect(res.body).to.deep.equal({ error: "Missing userId" });
		done();
	      })
	  })
	})
      })
    });
})

