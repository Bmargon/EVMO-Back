const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// Body Parser
// // //
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// // //
// Routes
// // //
app.use(require('./routes/index'))
// // //
// // //
// Mongoose DB conection
// // //
mongoose.connect('mongodb://localhost:27017/evmo', { useNewUrlParser: true, useUnifiedTopology: true });
// // //
// Back connection
// // //
app.listen(3000, () => {
  console.log('NodeJS escuchando back en el 3000');
});
