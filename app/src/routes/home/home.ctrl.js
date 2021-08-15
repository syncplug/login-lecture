"use strict"

// const express = require("express")
// const router = express.Router();

const user = {
	id: ["nemonic", "syncplug", "maxtonic"],
	pw: ["12", "123", "1234"]
};

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

		if(user.id.includes(id)){
			const idx = user.id.indexOf(id);
			console.log(idx)
			if(user.pw[idx] === pw){
				return res.json({
					success:true 
				})
			}
		}
		return res.json({
			success: false,
			msg: "로그인에 실패하셨습니다."
		})
		console.log(id , pw)

	}
}

module.exports = {
	output,
	process
}