const express = require('express');
const app = express();
const User = require('../../models/user_model')
const bcrypt = require('bcrypt');
const { jwtAuth } = require('../../middlewares/jwtAuth')
// // //
// Get
// // //
app.get('/user', jwtAuth, (req, res) => {

  User.find({}, (err, userDB) => {
    if(err) {
      return res.status(500).json({
        seccess: false,
        error: err
      })
    }
    if (!userDB) {
      return res.status(404).json({
        seccess: false,
        error: err
      })
    }
    res.json({
      userDB
    })
  })
})
// // //
// POST
// // //
app.post('/user', (req, res) => {

  let body = req.body

  let user = new User({
    name: body.name,
    surname: body.surname,
    email: body.email,
    password: bcrypt.hashSync(body.password, 5)
  })

  user.save((err, userDB) => {
    if (err) {
      return res.status(500).json({
        seccess: false,
        menssage: 'Error de registro',
        error: err
      })
    }
    res.json({
      userDB
    })
  })
})
// // //
// GET a single user
// // //
app.get('/user/:id', jwtAuth, (req, res) => {

  let id = req.params.id

  User.findById(id, (err, userDB) => {
    if (err) {
      return res.status(500).json({
        seccess: false,
        error: err
      })
    }
    if (!userDB) {
      return res.status(404).json({
        seccess: false,
        error: err
      })
    }
    res.json({
      userDB
    })
  })
})
// // //
// DELETE
// // //

module.exports = app