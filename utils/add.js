const Album = require("../models/album");
const Artist = require("../models/artist");
const Song = require("../models/song");

const addRecord = async ({ album, artist, song }) => {
    try {
        const record = new Record({
            album,
            artist,
            song,
        });
        await record.save();
        console.log(record, `you have added ${album}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = addRecord;