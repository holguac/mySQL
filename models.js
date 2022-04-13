
const sequelize = require("./connection");
const { DataTypes } = require("sequelize");

const Record = sequelize.define("Art", {
    artwork: {
        type: DataTypes.STRING,
        allowNull: true
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gallery: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = Record;
