"use strict"

const User = require("../../models/User")
// const express = require("express")
// const router = express.Router();

const output ={
	home: (req, res) => {   // function home(req,res){ 와 동일
			res.render("home/index")
	},

	login: (req, res) => {
			res.render("home/login")
	},

	register: (req, res) => {
		res.render("home/register")
	}
}

const process = {
	login: async (req, res) => {
		const user = new User(req.body);
		const response = await user.login();
		return res.json(response);	
	},

	register: (req, res) => {
		const user = new User(req.body);
		const response = user.register();
		return res.json(response);	
	}

}

module.exports = {
	output,
	process
}