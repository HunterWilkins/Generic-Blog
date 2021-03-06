const sequelize = require("../config/connection");
const {Model, DataTypes} = require("sequelize");

class User extends Model{};

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        },
        unique: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {sequelize});

module.exports = User;



