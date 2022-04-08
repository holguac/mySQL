const { DataTypes } = require("sequelize");
const { models } = require("../connection");

const db = require("../connection");
const Artwork = require("./artwork");

const Artist = db.define("Artist", {
    artist: {
    type: DataTypes.STRING,
	allowNull: false,
	unique: true
    }
}, {
    indexed: [{unique: true, fields: ["name"]}]
});

// Artist.hasMany(Artwork)
// Artist.associate = (models) => {
//     Artist.hasOne(models.Artwork)
// }
// Artist.hasOne(Artwork);

module.exports = Artist;