const app = require("../app");

const logger = require("../src/config/logger")


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server:3000 connected!")
    logger.info("server:3000 connected!")
})   