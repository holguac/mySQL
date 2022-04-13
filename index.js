const yargs = require ("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
const { addRecord, list, update, deleteOne, deleteAll, find } = require('./methods');

const app = async () => {
    if (argv.add) {
        const filmObj = {
            artwork: argv.artowrk,
            artist: argv.artist,
            gallery: argv.gallery
        }
        await addRecord(filmObj)
    }
    else if (argv.list) {
        await list()
    }
    else if (argv.find) {
        await find()
    }
    else if (argv.update) {
        await update()
    }
    else if (argv.delete) {
        await deleteOne()
    }
    else if (argv.deleteAll) {
        await deleteAll()
    }
    else {
        console.log("Wrong Command Loser!")
    }
};

app()
