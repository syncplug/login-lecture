//모듈
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const morgan = require('morgan')

dotenv.config();


//라우팅
const homeRouter = require("./src/routes/home")
const logger = require("./src/config/logger")
logger.log("info", "안녕하세요")

//앱셋팅
app.set("views", "./src/views")
app.set("view engine", "ejs")

//미들웨어
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
app.use(morgan('dev'))

app.use("/", homeRouter);

module.exports = app; 