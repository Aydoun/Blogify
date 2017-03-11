import axios from 'axios';

export function SimpleGet(url , params , next){
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
