"use strict"

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {  
    this.body = body;
  }

  async login() { 
    const client = this.body;
    try{
      const user = await UserStorage.getUserInfo(client.id);
    
      if (user) {
        if (user.id === client.id && user.pw === client.pw) {
          return {success: true};
        }
        return {success: false, msg: "비밀번호가 틀렸습니다."};
      }
      return {success: false, msg: "해당 아이디가 없습니다."}
    } catch (err) {
      return {success: false, err: err};
    }
  }

  async register() { 
    const client = this.body;
    try{  
      const response = await UserStorage.save(client);
      console.log(response)
      return response; 
    } catch (err) {
      //console.log(err)
      return {success: false, msg: err}
    }
  }

}



module.exports = User;