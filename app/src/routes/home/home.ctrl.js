"use strict"

// const express = require("express")
// const router = express.Router();

const UserStorage = require("../../models/UserStorage")

const output ={
	home: (req, res) => {   // function home(req,res){ 와 동일
			res.render("home/index")
	},

	login: (req, res) => {
			res.render("home/login")
	}
}

const process = {
	login: (req, res) => {
		const id = req.body.id,
					pw = req.body.pw;
		//console.log(UserStorage.getUsers("id","pw","name"));
		const user = UserStorage.getUsers("id","pw");

		const response = {};
		if(user.id.includes(id)){
			const idx = user.id.indexOf(id); 
			//console.log(idx)
			response.success = true;
			if(user.pw[idx] === pw){
				return res.json(response)
			}
		}
		response.success = false;
		response.msg = "로그인에 실패하셨습니다.";
		return res.json(response)
	}
}

module.exports = {
	output,
	process
}