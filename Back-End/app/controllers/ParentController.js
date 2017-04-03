function Parent(){}

Parent.prototype.formatter = function (msg , err = false){
    return {
        data : msg,
        error : err
    }
}

module.exports = Parent;
