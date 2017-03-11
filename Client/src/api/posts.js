import axios from 'axios';
// API Users static class
export default class ApiPosts {
  // get a list of users
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy users list
        let users = [];
        for (let x = 1; x <= 28; x++) {
          users.push({
            id: x,
            username: 'Johny ' + x,
            job: 'Employee ' + x,
          });
        }
        resolve(users);
      }, 1000);
    });
  }

  
}
