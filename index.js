require("dotenv").config();
const connection = require("./connection");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const Artist = require("./models/artist");
const Artwork = require("./models/artwork");
const Gallery = require("./models/gallery");
const add = require("./utils/add");
const deleteRecord = require("./utils/delete");

const app = async (argv) => {
    await connection.sync({alter: true})

    if (argv.add) {
        const recordObj = {
            artist: argv.artist,
            artwork: argv.artwork,
            gallery: argv.gallery,
        } 
        const addRecord = await add(recordObj);
        console.log(addRecord);
    }
    // else if (argv.list) {
    //     await listAll()
    // }
    // else if (argv.update) {
    //     await updateArtist()
    // }
    else if (argv.deleteRecord) {
        await deleteRecord()
    }
    // else if (argv.deleteAll) {
    //     await deleteAll()
    // }
    // else {
    //     console.log("Wrong command")
    // }
};

app(argv);
