const sequelize = require("../config/connection");
const {Model, DataTypes} = require("sequelize");

class Post extends Model{};

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },

    body: {
        type: DataTypes.STRING,
        allowNull: false
    }

    
}, {sequelize});

module.exports = Post;