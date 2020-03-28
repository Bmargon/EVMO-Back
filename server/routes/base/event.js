const express = require('express')
const app = express()
const Event = require('../../models/event_model')
const User = require('../../models/user_model')
const { jwtAuth } = require('../../middlewares/jwtAuth')
// // //
// Create an event
// // //
app.post('/event', jwtAuth, (req, res) => {

  let body = req.body
  let userID = req.user._id

  let year = new Date().getFullYear()
  let month = new Date().getMonth()
  let day = new Date().getDay()
  let date = new Date(year, month, day)

  let newEvent = new Event({
    name: body.name ,
    description: body.description ,
    free: body.free ,
    price: body.price ,
    public: body.public,
    adress: body.adress ,
    creator: userID,
    maxAssistants: body.maxAssistants ,
    creationDate: date,
    eventDate: body.eventDate ,
    passwordRequired: body.passwordRequired ,
    password: body.password ,
    assistantsConfirmed: [] ,
  })

  newEvent.save((err, eventDB) => {
    if (err) {
      return res.status(500).json({
        seccess: false,
        message: 'Error al crear evento',
        error: err
      })
    }

    User.findById(userID, (err,  userDB) => {
      if (err) {
        return res.status(500).json({
          seccess: false,
          message: 'Error, no se encontrar usuario',
          error: err
        })
      }

      userDB.events.push(eventDB)
      userDB.save()

      res.json({
        eventDB
      })
    })
  })
})
// // //
// Get all public events
// // //
app.get('/event', jwtAuth, (req, res) => {
  Event.find({public: true}, (err, eventDB) => {
    if (err) {
      return res.status(500).json({
        seccess: false,
        message: 'Error al crear evento',
        error: err
      })
    }
    res.json({
      eventDB
    })
  })
})
module.exports = app