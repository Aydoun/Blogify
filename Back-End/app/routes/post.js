var express = require('express');
var posts = express.Router();
var POSTS = require('../controllers/postController');

posts.get('/', POSTS.get);
posts.get('/:id', POSTS.getOne);
posts.post('/', POSTS.create);
posts.put('/:id', POSTS.update);
posts.delete('/:id', POSTS.remove);

module.exports = posts;
