import User from '../../models/users.js'


const testUser = {
  firstname: "Inimfon",
  lastname: "Ebong",
  telephone: '09168848807',
  password: 'password',
  email: 'ebonginimfon8@gmail.com',
  type: 1,
  address: "Cross river state",
  token: '1234'
}


describe('test verify', () => {
  before((done) => {
    User.deleteOne({email: testUser.email }).then(() => {
      const user = new User(testUser)
      user.save().then(() => {
        done()
      }).catch((err) => {
        done(err)
      });
    }).catch((err) => {
      done(err);
    });
  });

  it('test correct code', (done) => {
    const email = 'ebonginimfon8@gmail.com';
    const encodedEmail = encodeURIComponent(email);
    // Now you can use `encodedEmail` in your URL
    const url = `/verify/${encodedEmail}`
    request.post(url).send({ token: '1234' })
    .expect(200)
    .end((err, res) => {
      if (err) {7
	done(err)
      }
      expect(res.body).to.deep.equal({ status: "Ok" });
      done();
    });
  });


  after((done) => {
    User.deleteOne({email :testUser.email }).then(() => {
      done();
    }).catch((err) => {
      done(err);
    })
  });
});
