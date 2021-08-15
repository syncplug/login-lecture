"use strict"

const express = require("express")
const router = express.Router();

const home = (req, res) => {   // function home(req,res){ 와 동일
    res.render("home/index")
};

const login = (req, res) => {
    res.render("home/login")
};

module.exports = {
    home : home,
    login : login
}