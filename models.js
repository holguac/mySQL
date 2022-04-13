
const sequelize = require('./connection');
const { DataTypes } = require('sequelize');

const Record = sequelize.define('Art', {
    artwork: {
        type : DataTypes.STRING,
        allowNull : false
    },
    artist: {
        type : DataTypes.STRING,
        allowNull : false
    },
    gallery: {
        type : DataTypes.INTEGER,
    }
})

module.exports = Record;
