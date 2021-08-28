"use strict"

const User = require("../../models/User")
const logger = require("../../config/logger")

const output ={
	home: (req, res) => {   // function home(req,res){ 와 동일
		logger.info(`GET /index 304 - 홈 화면으로 이동`)
		res.render("home/index")
	},

	login: (req, res) => {
		logger.info(`GET /login 304 - 로그인 화면으로 이동`)
		res.render("home/login")
	},

	register: (req, res) => {
		logger.info(`GET /register 304 - 등록 화면으로 이동`)
		res.render("home/register")
	}
}

const process = {
	login: async (req, res) => {
		const user = new User(req.body);
		const response = await user.login();
		const url = {
			method: "POST",
			path: "/login",
			status: response.err ? 400 : 200 
		}

		log(response, url);
		return res.json(response);
	},

	register: async (req, res) => {
		const user = new User(req.body);
		const response = await user.register();
		const url = {
			method: "POST",
			path: "/register",
			status: response.err ? 400 : 200
		}

		log(response, url);
		return res.json(response);
	}
}

const log = (response, url) => {
	if(response.err){
		logger.error(`${url.method} ${url.path} ${url.status} response - ${response.success} ${response.err}`)
	} else {
	logger.info(`${url.method} ${url.path} ${url.status} response - ${response.success} ${response.msg || ""}`)
	}
}

module.exports = {
	output,
	process
}