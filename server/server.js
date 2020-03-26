const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// // //
// CORS
// // //
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
    // allowed XHR methods
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    res.send();
  });
});
// // //
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
