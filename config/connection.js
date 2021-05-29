const Sequelize = require("sequelize");
require("dotenv").config();
const sequelize = 
process.env.NODE_ENV === "production" ?
new Sequelize(process.env.JAWSDB_URL) :
new Sequelize(process.env.db, process.env.user, process.env.password, {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize;