import User from '../models/users.js'
import auth from '../auth/auth.js'


const verifyemail = async (req, res) => {
  const { email } = req.params
  const { token } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(404).json({error: "Not Found" })

  if (user.token === token ) {
    await User.updateOne({ email }, { verified: true })
    return res.json({ status: "Ok" })
  }
  return res.status(404).json({error: "Failed" })
}

export const auth_token = async (req, res) => {
  const { token } = req.body

  try {
    const verified = auth.verifyToken(token)
    console.log(verified);
    return res.status(200).json({ status: "verified" })
  } catch {
    return res.status(401).json({ status: "failed" })
  }
}

export default verifyemail
