import User from '../models/users.js'
import Mailer from '../services/MailService.js'
import sha1 from 'sha1';


class AuthController {

  static async requestToken (req, res) {
    const { email } = req.params


  console.log(email)
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({error: "Not Found" })
    const token = Mailer.generateToken() 

    await User.updateOne({ email }, { token })
    const mailResponse = await Mailer.mail(email, {
      title: 'RevTax',
      body: `<p>Please enter this code to reset your password ${token} </p>`
    });
    if (mailResponse.error) return res.status(500).json({ error: "There was an error sending code" })


    return res.json({ status: "Ok" })
  }

  static async verifyToken(req, res) {

    const { email } = req.params
    const { token } = req.body;
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({error: "Not Found" })
    if (user.token === token ) return res.json({status: "Ok", email })

    return res.status(403).json({error: "Wrong token" })
  }

  static async resetPassword(req, res) {
    const { email } = req.params
    const { password } = req.body;
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({error: "Not Found" })

    await User.updateOne({ email }, { password: sha1(password) })
    return res.json({ status: "Ok" })
  }
}


export default AuthController
