require("dotenv").config();
require("./connection");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const Artist = require("./models/artist");
const Album = require("./models/album");
const Song = require("./models/song");
const { addAlbum, addArtist, addSong } = require("./utils/add");
const { deleteAlbum, deleteArtist, deleteSong, deleteAll } = require("./utils/delete");
const { findAlbum, findArtist, findSong, findALl } = require("./utils/find");
const { updateAlbum, updateArtist, updateSong } = require("./utils/update");

const App = async () => {
    if (argv.addRecord) {
        const recordObj = {
            album: argv.album,
            artist: argv.artist,
            song: argv.song,
        }
        await addRecord(recordObj)
    }
    else if (argv.list) {
        await listAll()
    }
    else if (argv.update) {
        await updateAlbum()
    }
    else if (argv.delete) {
        await deleteAlbum()
    }
    else if (argv.deleteAll) {
        await deleteAll()
    }
    else {
        console.log("Wrong command")
    }
    console.log(addRecord);
};