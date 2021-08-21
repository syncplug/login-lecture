"use strict"

const fs=require("fs").promises;

class UserStorage {

  static getUsers(...fields){ //은닉화
    //const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      //console.log(newUsers, field)
      if(users.hasOwnProperty(field)){
      newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    //console.log(newUsers)
    return newUsers;
  }

  static getUserInfo(id){
    return fs.readFile("./src/databases/users.json")
    .then((data) => {
      const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const usersKey = Object.keys(users); //=>[id,pw,name]
      const userInfo = usersKey.reduce((newUser, info)=> {
        newUser[info] = users[info][idx];
        return newUser;
      },{})
       
      return userInfo;

    })
    .catch(console.error)

  }

  static save(userInfo){
    //const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    return {success: true};
  }
}





module.exports = UserStorage;  