const express = require('express');
const app = express();
// // //
// Routes
// // //
app.use(require('./base/user'))
app.use(require('./base/login'))
app.use(require('./base/event'))

module.exports = app