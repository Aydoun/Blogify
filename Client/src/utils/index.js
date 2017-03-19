import axios from 'axios';

export function GetRequest(url , params , next){
    axios.get(url , {
        params : params
      }
    ).then(function (response) {
        if (response.status == 200) {
            next(response.data);
        } else {
            console.log('status  !== 200');
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function PostRequest(url , data , next ){
    axios.post(url, data,{
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: [function (data) {
        var formData = [];
            for(var p in data){
              if (data.hasOwnProperty(p) && (  data[p] || data[p] == 0) ) {
                formData.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
              }
            }
        return formData.join("&");
      }],
    }).then(function(response){
        next(response.data);
    }).catch(function (error) {
        console.log('POST REQUEST EXCEPTION : ' , error);
    });
}

export function DeepGet (obj, properties , defaultVal = '') {
    if (!obj) {
        if (defaultVal == null) return '';
        return obj === 0 ? 0 : defaultVal;
    }

    if (properties.length === 0) {
        return obj;
    }

    var foundSoFar = obj[properties[0]];
    var remainingProperties = properties.slice(1);

    return DeepGet(foundSoFar, remainingProperties , defaultVal);
}
