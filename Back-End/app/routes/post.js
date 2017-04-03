var express = require('express');
var posts = express.Router();
var {get , getOne , create , update , remove , comment , delComment} = require('../controllers/postController');

//General Crud Routing
posts.get('/', get);
posts.get('/:id', getOne);
posts.post('/', create);
posts.put('/:id', update);
posts.delete('/:id', remove);

//Comments Routing
posts.post('/:id/comment' , comment);
posts.delete('/:id/comment' , delComment);

module.exports = posts;
