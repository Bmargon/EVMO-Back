const express = require('express');
const app = express();
const User = require('../../models/user_model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/configConsts')
// // //
// Get by email
// // //
app.post('/login', (req, res) => {

  let body = req.body

  User.findOne({ email: body.email }, (err, userDB) => {
    if (err) {
      return res.status(500).json({
        seccess: false,
        menssage: 'Error al hacer login',
        error: err
      })
    }
    if (!userDB) {
      return res.status(404).json({
        seccess: false,
        menssage: 'Error, usuario no encontrado',
        error: err
      })
    }
    if (userDB) {
      if (bcrypt.compareSync(body.password, userDB.password)) {
        let token = jwt.sign({user: userDB}, config.jwtSEED, { expiresIn: config.jwtExpiration })
        return res.json({
          userDB,
          token
        })
      } else {
        return res.status(404).json({
          seccess: false,
          menssage: 'Error, email y/o contraseña incorrecto',
          error: err
        })
      }
    }
  })
})

module.exports = app