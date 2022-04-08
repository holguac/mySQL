const { DataTypes } = require("sequelize");
const db = require("../connection");
const Artist = require("./artist");

const Artwork = db.define("Artwork", {
    artwork: {
	type: DataTypes.STRING,
	allowNull: false,
	unique: true
    }
}, {
    indexed: [{unique: true, fields: ["name"]}]
});

// Artwork.hasOne(Artist);

module.exports = Artwork;