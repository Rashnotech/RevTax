import User from "../models/users.js";


const verify = async (req, res) => {
  const { email } = req.params

  const { code } = req.body;

  const user = await User.findOne({ email })
  if (!user) return res.status(404).json({error: "Not Found" })

  if (user.token === code ) {
    await User.updateOne({ email }, { vetified: true })
    return res.json({ status: "Ok" })
  }
  return res.status(404).json({error: "Failed" })
}

export default verify
