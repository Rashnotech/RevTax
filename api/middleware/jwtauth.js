import auth from '../auth/auth.js'
import User from '../models/users.js'


/**
 * A middleware to verify the user
 */

function jwtAuth(req, res, next) {
  const token = req.headers.authorization
  if (!token) return res.status(403).json({error: "forbidden"})

  let payload
  try {
    payload = auth.verifyToken(token);
  } catch {
    return res.status(401).json({ error: "Invalid token" })
  }
  if (!payload) return res.status(401).json({ error: "Invalid token" })

  console.log(payload) 
  User.find({}).then((users) => {
    console.log(users)
  })

  const filter = { $or: [ {telephone: payload.telephone }, { password: payload.password } ] }
  User.findOne(filter).then((user) => {
    if (!user) return res.status(401).json({ error: "Forbidden" })
    req.user = user
    next()
  }).catch((err) => {
    console.log(err)
  });
}

export default jwtAuth
