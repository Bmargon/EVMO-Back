const express = require('express');
const app = express();
const Ticket = require('../../models/ticket_model')
const Event = require('../../models/event_model')
const { jwtAuth } = require('../../middlewares/jwtAuth')
const jwt = require('jsonwebtoken')
var keygen = require("keygenerator");
var moment = require('moment');

// // //
// Create a ticket
// // //
app.post('/ticket/:id', jwtAuth, (req, res) => {

  let userID = req.user._id
  let eventID = req.params.id

  Event.findById(eventID, (err, eventDB) => {
    if (err) {
      return res.status(404).json({
        success: false,
        message: 'No se encontro el evento',
        err
      })
    }
    
    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    let day = new Date().getDay()
    var today = new Date(year, month, day)

    console.log(today)
    // let ticket = new Ticket({
    //   key: keygen._(),
    //   // jwt: jwt.sign({eventInfo: event}),
    //   eventTiket: eventID,
    //   owner: userID
    // })
  })


})
module.exports = app