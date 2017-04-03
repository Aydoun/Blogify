var postModel = require('../models/postModel');
var _ = require('lodash');

exports.get = function (req, res , next){
  var query = {};
  postModel.find({},
    function (err, data) {
      if (err) return res.status(200).send({error:true , message : err});

      return res.status(200).send(Object.assign(data , {error : false}));
    }
  );
}

exports.getOne = function(req, res, next) {
  var params = {
    _id : req.params.id
  }

	postModel.findOne(params, function (err, data) {
  		if (err) res.status(200).send({error : true , message : err});

      res.status(200).send({error : false , data : data});
	});
};

exports.create = function (req, res, next) {
	var newPost = new postModel(req.body);

	newPost.save(function (err, data) {
		if (err) return res.status(200).send({error:true , message:err});

		return res.status(200).send({data: data, error:false});
	});

};

exports.update = function (req, res, next) {
	var id = req.params.id;
	var doc = {
      title : req.body.title || ''
  };

	postModel.update({_id: id}, doc, function (err) {
  		if (err) return res.status(200).send({error:true , message:err});

  		res.status(200).send({error:false , message : 'success'});
	});
};


exports.remove = function (req, res, next) {
	var id = req.params.id;

	postModel.findOne({_id: id}).remove(function (err) {
  		if (err) return res.status(200).send({error:true , message:err});

  		res.status(200).send({status:true , message:'Delete Success'});
	});
};

exports.comment = function(req, res , next) {
    var postId = req.params.id;
    var body = req.body;

    var commentBody = {
      content : body.content,
      comment_date : Math.round(new Date().getTime()/1000),
      nick_name : body.nick_name
    }

    var post = postModel.findOne({_id: postId} , function(err , data){
        data.comments.push(commentBody);
        data.save(function(_err , _data){
            if (_err) console.log('err ' , _err);

            res.status(200).send({status:true , message:'Comment Successfully Inserted'});
        });
    });
}

exports.delComment = function(req, res , next) {
    var postId = req.params.id;
    var commentId = req.query.commentId;
    //res.status(200).send({status:false , message:req.query});return ;
    if (!commentId) {
        res.status(200).send({status:false , message:'Incomplete Paramters'});
        return ;
    }


    //return false;

    var post = postModel.findOne({_id: postId} , function(err , data){
        //data.comments.push(commentBody);
        if (data != null) {
            //console.log('Previous Length : ' , data.comments.length);
            _.remove(data.comments, function(n) {
              return n._id == commentId;
            });

            //console.log('new comments ');

            //console.log('New Length : ' , data.comments.length);

            data.save(function(_err , _data){
                if (_err) console.log('err ' , _err);

                res.status(200).send({status:true , message:'Comment Deleted'});
            });

            //res.status(200).send({status:true , message:data.comments});
            // data.save(function(_err , _data){
            //     if (_err) res.status(200).send({status:true , message:_err});
            //
            //     res.status(200).send({status:true , message:'Comment Deleted'});
            // });
        } else {
            res.status(200).send({status:false , message:'Entry Doesn\'t Exist'});
        }



        // data.save(function(_err , _data){
        //     if (_err) console.log('err ' , err);
        //
        //     res.status(200).send({status:false , message:_data});
        // });
    });
}
