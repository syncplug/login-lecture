//모듈
const express = require("express");
const { connected } = require("process");
const app = express();


//라우팅
const homeRouter = require("./routes/home")

//앱셋팅
app.set("views", "./views")
app.set("view engine", "ejs")

//미들웨어
app.use("/", homeRouter);

module.exports = app;