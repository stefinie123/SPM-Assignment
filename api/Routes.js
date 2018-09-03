const express = require('express');
var routes = express.Router();

var studentRoutes = require('./Routes/studentRoutes');

routes.use('/student/', studentRoutes);

module.exports = routes;
