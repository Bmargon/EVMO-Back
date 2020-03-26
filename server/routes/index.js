const express = require('express');
const app = express();
// // //
// Routes
// // //
app.use(require('./base/user'))

module.exports = app