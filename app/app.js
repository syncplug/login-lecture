//모듈
const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();


//라우팅
const homeRouter = require("./src/routes/home")

//앱셋팅
app.set("views", "./src/views")
app.set("view engine", "ejs")

//미들웨어
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

app.use("/", homeRouter);

module.exports = app; 