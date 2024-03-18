import auth from '../../auth/auth'


describe('test authentication with jwt', () => {
  it("test createToken", () => {
    auth.createToken({username: 'Rev Tax'}).then((token) => {
      expect(token).to.equal("eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJldiBUYXgiLCJpYXQiOjE3MTA3NTk0NzAsImV4cCI6MTcxMzM1MTQ3MH0.vE92hfc30pb1EcFWGPhe-bSTeYkIzTGskwN5y4kTzL8ZaYUnSfqDpqr_CN8hOckw9mKJcIumWPcND_TVJPwC_w")
    });
  });

  it("test VerifyToken", () => {
    const decode = auth.verifyToken("eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJldiBUYXgiLCJpYXQiOjE3MTA3NTk0NzAsImV4cCI6MTcxMzM1MTQ3MH0.vE92hfc30pb1EcFWGPhe-bSTeYkIzTGskwN5y4kTzL8ZaYUnSfqDpqr_CN8hOckw9mKJcIumWPcND_TVJPwC_w")
    expect(decode.username).to.equal('Rev Tax')
  });

});
