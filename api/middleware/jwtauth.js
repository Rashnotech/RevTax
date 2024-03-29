import auth from '../auth/auth.js'
import User from '../models/users.js'


/**
 * A middleware to verify the user
 */

function jwtAuth(req, res, next) {
  const  authorization = req.headers.authorization ? req.headers.authorization : null;
  console.log('Token', authorization)
  if (!authorization) return res.status(403).json({error: "forbidden"})

  try {
    const payload = auth.verifyToken(authorization);

    if (!payload) return res.status(401).json({ error: "Invalid token" })
    User.findOne({ email: payload.email }).then((user) => {
      if (!user) return res.status(401).json({ error: "User not found" })
      req.user = user
      next()
    }).catch((err) => {
      console.log(err)
    });
  } catch {
    return res.status(401).json({ error: "Invalid token" })
  }

}

export default jwtAuth
