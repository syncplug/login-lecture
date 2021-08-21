"use strict"

class UserStorage {
  static #users = {
    id: ["nemonic", "syncplug", "maxtonic"],
    pw: ["12", "123", "1234"],
    name:["유정보","이동기","김가창"]
  };

  static getUsers(...fields){ //은닉화
    const users = this.#users;
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
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKey = Object.keys(users); //=>[id,pw,name]
    const userInfo = usersKey.reduce((newUser, info)=> {
      newUser[info] = users[info][idx];
      return newUser;
    },{})
    return userInfo;
  }

  static save(userInfo){
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    return {success: true};
  }
}





module.exports = UserStorage;  