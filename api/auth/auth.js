import jwt from 'jsonwebtoken'
//const jwt = require('jsonwebtoken')
import fs from 'fs'


class Auth {
  createToken(payload) {
    const privateKey = fs.readFileSync('.private.key')
    //const privateKey = process.env.PRIVATEKEY
    return new Promise((resolve, reject) => {
      jwt.sign(payload, privateKey, {expiresIn: '30d', algorithm: 'ES256'}, (err, token) => {
      if (err) {
	reject("Error creating token", err)
      }
	resolve(token)
      })
    })
  }

  verifyToken(token) {
    const publicKey = fs.readFileSync('.pubilc.key')
    //const publicKey = process.env.PUBLICKEY
    try {
      const decoded = jwt.verify(token, publicKey, {algorithm: 'ES256'})
      return decoded
    } catch {
      throw new Error("Error verifying token")
    }
  }
}

const auth = new Auth()
export default auth
