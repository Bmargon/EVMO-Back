const jwt = require('jsonwebtoken');
const config = require('../config/configConsts')

const jwtAuth = (req, res, next) => {
  
  let token = req.get('token')

  jwt.verify(token, config.jwtSEED, (err, decoded) => {
    if (err) {
      return res.json({
        err,
        message: 'Error en la verificacion de token'
      })
    }
    req.user = decoded.user
    next()
  })
}

module.exports = {jwtAuth}