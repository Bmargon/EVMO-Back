const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let User = new Schema({
  name: {type: String, required: [true, 'El nombre de usuario es obligatorio']},
  surname: {type: String, required: [true, 'El apellido es obligatorio']},
  email: {type: String, unique: true,required: [true, 'El email es obligatorio']},
  password: {type: String, required: true},
  facebook: {type: Boolean, required: true, default: false},
  events: {type: Array},
  friends: {type: Array},
  tickets: {type: Array}
})

module.exports = mongoose.model('User', User)