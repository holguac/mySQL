const { DataTypes } = require("sequelize");
const db = require("../connection");
const Artwork = require("./artwork");

const Gallery = db.define("Gallery", {
    gallery: {
	type: DataTypes.STRING,
	allowNull: false,
	unique: false
    }
}, {
    indexed: [{unique: true, fields: ["name"]}]
});

module.exports = Gallery;