const { DataTypes } = require("sequelize");

const db = require("../connection");

const Artist = db.define("Artist", {
    name: {
        type: DataTypes.STRING,
	allowNull: false,
	unique: true
    }
}, {
    indexed: [{unique: true, fields: ["name"]}]
});

module.exports = Artist;