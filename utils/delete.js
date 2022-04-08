const { Sequelize } = require("sequelize");
const Artwork = require("../models/artwork");
const Artist = require("../models/artist");
const Gallery = require("../models/gallery");

const deleteRecord = async (recordObj) => {
    if (argv.gallery) {
        try {
            const deleteRecord = await Gallery.delete ({
                where: { gallery: argv.gallery },
            });
    } catch (error) {
      console.log(error);
    }
  }};

module.exports = deleteRecord;