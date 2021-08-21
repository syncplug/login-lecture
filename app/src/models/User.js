"use strict"

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {  
    this.body = body;
  }

  login() { 
    const { id, pw } = UserStorage.getUserInfo(this.body.id);
    
    if (id) {
      if (id === this.body.id && pw === this.body.pw) {
        return {success: true};
      }
      return {success: false, msg: "비밀번호가 틀렸습니다."};
    }
    return {success: false, msg: "해당 아이디가 없습니다."}
  }
}

module.exports = User;