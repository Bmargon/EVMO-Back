const express = require('express');
const app = express();
// // //
// Routes
// // //
app.use(require('./base/user'))
app.use(require('./base/login'))

module.exports = app