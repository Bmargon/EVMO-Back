const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Ticket = new Schema({
  key: {type: String, required: true},
  jwt: { type: String, required: true },
  eventTiket: { type: Schema.Types.ObjectId, ref: 'Event'},
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
  qrPath: {type: String, required: true}
})

module.exports = mongoose.model('Ticket', Ticket)