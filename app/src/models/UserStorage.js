"use strict"

//const fs=require("fs").promises;
const db = require("../config/db");

class UserStorage {

  static getUserInfo(id){
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?"; 
      db.query(query,[id], (err, data) => {
        if(err) reject(`${err}`);
        //console.log(data[0])
        else resolve(data[0]); //else 꼭 기억
      })
    })
  }


  static async save(userInfo){
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, pw)VALUE(?,?,?);"; 
      db.query(query,[userInfo.id, userInfo.name, userInfo.pw], (err, data) => {
        if(err) reject(`${err}`);
        //console.log(data[0])
        else resolve({ succes:true });
      })
    })
  }
}

module.exports = UserStorage;  