const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Event = new Schema({
  name: { type: String, required: [true, 'El nombre de evento es obligatorio'] },
  description: {type: String, required: false},
  free: {type: Boolean, default: true, required: true},
  price: {type: Number, required: false},
  adress: { type: String, required: true },
  creator: {type: Schema.Types.ObjectId, required: true},
  maxAssistants: {type: Number, required: true},
  CreationDate: {type: String,required: true},
  eventDate: {type: String, required: true},
  passwordRequired: {type: Boolean, default: false, required: true},
  password: {type: String, required: true},
  assistantsConfirmed: {type: Array, required: true},
})

module.exports = mongoose.model('Event', Event)