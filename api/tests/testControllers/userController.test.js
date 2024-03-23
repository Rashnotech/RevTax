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


describe('test userController', () => {
  before((done) => {
    User.deleteOne({email: testUser.email}).then(() => {
      done()
    }).catch((err) => {
      done(err)
    })
  })

  describe('test register (/auth/signup)', () => {
    it('test Missing firstname', (done) => {
      const testUser = {
	lastname: "Ebong",
	telephone: '09168848807',
	email: 'ebonginimfon8@gmail.com',
	password: 'password',
	type: 1,
	address: "Cross river state"
      }
      request.post('/auth/signup').send({...testUser})
      .expect(400)
      .end((err, res) => {
	if (err) {
	  done(err)
	}
	expect(res.body).to.deep.equal({ error: "firstname is required" });
	done();
      })
    });

    it('test Missing lastname', (done) => {
      const testUser = {
        firstname: "Inimfon",
        telephone: '09168848807',
        email: 'ebonginimfon8@gmail.com',
	password: 'password',
	type: 1,
	address: "Cross river state"
      }
      request.post('/auth/signup').send({...testUser})
	.expect(400)
	.end((err, res) => {
	  if (err) {
	    done(err)
	  }
	  expect(res.body).to.deep.equal({ error: "lastname is required" });
	  done();
	})
    });

    it('test Missing telephone', (done) => {
      const testUser = {
	firstname: "Inimfon",
	lastname: "Ebong",
	email: 'ebonginimfon8@gmail.com',
	password: 'password',
	type: 1,
	address: "Cross river state"
      }
      request.post('/auth/signup').send({...testUser})
        .expect(400)
        .end((err, res) => {
          if (err) {
            done(err)
          }
          expect(res.body).to.deep.equal({ error: "telephone is required" });
          done();
        })
    });

    it('test Missing password', (done) => {
      const testUser = {
	firstname: "Inimfon",
	lastname: "Ebong",
	telephone: '09168848807',
	email: 'ebonginimfon8@gmail.com',
	address: "Cross river state",
	type: 1
      }
      request.post('/auth/signup').send({...testUser})
        .expect(400)
        .end((err, res) => {
          if (err) {
            done(err)
          }
          expect(res.body).to.deep.equal({ error: "password is required" });
          done();
        })
    });

    it('test Missing address', (done) => {
      const testUser = {
	firstname: "Inimfon",
	lastname: "Ebong",
	telephone: '09168848807',
	email: 'ebonginimfon8@gmail.com',
	password: 'password',
	type: 1,
      }
      request.post('/auth/signup').send({...testUser})
	.expect(400)
	.end((err, res) => {
	  if (err) {
	    done(err)
	  }
	  expect(res.body).to.deep.equal({ error: "address is required" });
	  done();
	})
    });

    it('test Missing type', (done) => {
      const testUser = {
	firstname: "Inimfon",
	lastname: "Ebong",
	telephone: '09168848807',
        email: 'ebonginimfon8@gmail.com',
	password: 'password',
        address: "Cross river state"
      }
      request.post('/auth/signup').send({...testUser})
        .expect(400)
	.end((err, res) => {
          if (err) {
            done(err)
          }
          expect(res.body).to.deep.equal({ error: "type is required" });
	  done();
	})
    });

    it('test correct data', (done) => {
      const testUser = {
	firstname: "Inimfon",
	lastname: "Ebong",
	telephone: '09168848807',
	email: 'ebonginimfon8@gmail.com',
	password: 'password',
        address: "Cross river State",
	type: 1
      }
      request.post('/auth/signup').send({...testUser})
	.expect(201)
	.end((err, res) => {
	  if (err) {
	    done(err)
	  }
	  expect(res.body).to.deep.equal({ "message": "User created successfully" });
	  done();
	})
    });
  });

  describe('test login', () => {
    it('test correct data', (done) => {
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
	  expect(res.body).to.have.property("token").that.is.a('string');
	  done();
	})
    });

    it('test with only email', (done) => {
      const testUser = {
	email: 'ebonginimfon8@gmail.com',
	password: 'password',
      }
      request.post('/auth/login').send({...testUser})
	.expect(200)
	.end((err, res) => {
	  if (err) {
	    done(err)
	  }
	  expect(res.body).to.have.property("token").that.is.a('string');
	  done();
	})
    });

    it('test with only telephone', (done) => {
      const testUser = {
	telephone: '09168848807',
	password: 'password',
      }
      request.post('/auth/login').send({...testUser})
	.expect(200)
	.end((err, res) => {
	  if (err) {
	    done(err)
	  }
	  expect(res.body).to.have.property("token").that.is.a('string');
	  done();
	})
    });

    it('test wrong password', (done) => {
      const testUser = {
	telephone: '09168848807',
	email: 'ebonginimfon8@gmail.com',
	password: 'wrong password',
      }
      request.post('/auth/login').send({...testUser})
	.expect(400)
	.end((err, res) => {
	  if (err) {
	    done(err)
	  }
	  expect(res.body).to.deep.equal({ error: "Wrong password" })
	  done();
	})
    });
  })
})

