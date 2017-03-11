var express = require('express');
var AllRoutes = express.Router();

var posts = require('./post');

AllRoutes.use('/post' , posts);

module.exports = AllRoutes;
