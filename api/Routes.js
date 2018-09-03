const express = require('express');
var routes = express.Router();

//requiring student details endpoints
var studentRoutes = require('./Routes/studentRoutes');

//specifying endpoint path for students
routes.use('/student/', studentRoutes);

module.exports = routes;
