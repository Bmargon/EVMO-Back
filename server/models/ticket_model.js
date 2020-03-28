const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Ticket = new Schema({
  key: {type: String, required: true},
  jwt: { type: String, required: true },
  eventTiket: {type: Schema.Types.ObjectId}
})

module.exports = mongoose.model('Ticket', Ticket)