require("dotenv").config();

const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.MYSQL_URI);

(async () => {
    console.log("IYA");
})();