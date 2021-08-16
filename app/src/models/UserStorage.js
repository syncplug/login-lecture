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
}

module.exports = UserStorage;  