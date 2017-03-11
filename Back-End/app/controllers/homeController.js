var get = function (req, res, next) {
    return res.status(200).send({message:"Welcome To CO-Blogify API"});
};

module.exports = {get};
