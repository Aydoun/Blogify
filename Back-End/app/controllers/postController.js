var postModel = require('../models/postModel');

function get (req, res , next){
  var query = {};
  postModel.find({},
    function (err, data) {
      if (err) return res.status(200).send({error:true , message : err});

      return res.status(200).send(Object.assign(data , {error : false}));
    }
  );
}

function getOne (req, res, next) {
  var params = {
    _id : req.params.id
  }

	postModel.findOne(params, function (err, data) {
  		if (err) res.status(200).send({error : true , message : err});

      res.status(200).send({error : false , data : data});
	});
};

function create (req, res, next) {
	var newPost = new postModel(req.body);

	newPost.save(function (err, data) {
		if (err) return res.status(200).send({error:true , message:err});

		return res.status(200).send({data: data, error:false});
	});

};

function update (req, res, next) {
	var id = req.params.id;
	var doc = {
      title : req.body.title || ''
  };

	postModel.update({_id: id}, doc, function (err) {
  		if (err) return res.status(200).send({error:true , message:err});

  		res.status(200).send({error:false , message : 'success'});
	});
};


function remove (req, res, next) {
	var id = req.params.id;

	postModel.findOne({_id: id}).remove(function (err) {
  		if (err) return res.status(200).send({error:true , message:err});

  		res.status(200).send({status:true , message:'Delete Success'});
	});
};

module.exports = {get , getOne , create , update , remove};
