const Artwork = require("../models/artwork");
const Artist = require("../models/artist");
const Gallery = require("../models/gallery");

const add = async (recordObj) => {
    try {
        const findArtist = await Artist.findOne({where: {artist: recordObj.artist}});
        const gallery = await Gallery.create({ gallery: recordObj.gallery });
        const artwork = await Artwork.create({ artwork: recordObj.artwork, GalleryId: gallery.id });
        const artist = await Artist.create({
        artist: recordObj.artist,
        ArtworkId: artwork.id,
      });
      return { artist, artwork, gallery };

      console.log("Record added"); 
    } catch (error) {
      console.log(error);
    }
  };

module.exports = add;