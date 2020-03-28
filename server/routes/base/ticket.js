const express = require('express');
const app = express();
const Ticket = require('../../models/ticket_model')
const { jwtAuth } = require('../../middlewares/jwtAuth')
const jwt = require('jsonwebtoken')
var keygen = require("keygenerator");

// // //
// Create a ticket
// // //
app.post('/ticket/:id', jwtAuth, (req, res) => {

  let userID = req.user._id
  let eventID = req.params.id

  let ticket = new Ticket({
    key: keygen._(),
    jwt: '',
    eventTiket: eventID,
    owner: userID
  })
})
module.exports = app