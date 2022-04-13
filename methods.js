const Record = require("./models");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

//ADD RECORD
exports.addRecord = async (filmObj) => {
    try{
        await Record.sync();
        await Record.create(filmObj);
    } catch (error) {
        console.log(error);
    }
};
//LIST
exports.list = async () => {
    try{
        const listOfArtworks = await Record.findAll();
        console.log(listOfArtworks);
    }catch (error) {
        console.log(error);
    }
};
//LIST W/ PARAMETERS
exports.find = async () => {
	try {
		if (argv.artwork) {
			const findThis = await Record.findAll({
				where: {
					artwork: argv.artwork
				}
			})
			console.log(findThis);
		}
		else if (argv.artist) {
			const findThis = await Record.findAll({
				where: {
					artist: argv.artist
				}
			})
			console.log(findThis);
		}
		else if (argv.gallery) {
			const findThis = await Record.findAll({
				where: {
					gallery: argv.gallery
				}
			})
			console.log(findThis);
		}
		else {
			console.log('Nothing to find, lmao!')
		}
	} catch (error) {
		console.log(error)
	}
}
//UPDATE
exports.update = async () => {
    try {
        if (argv.newArtwork) {
            await Record.update ({ artwork: argv.newArtwork}, {
                where: {
                    artwork: argv.artwork,
                }
            });
        }
        else if (argv.newArtist) {
            await Record.update ({ artist: argv.newArtist}, {
                where: {
                    artist: argv.artist,
                }
            });
        }
        else if (argv.newGallery) {
			await Record.update( {gallery: argv.newGallery}, {
				where: {
					gallery: argv.gallery
				}
			})
		}
		else {
			console.log("update error");
		}
	} catch (error) {
		console.log(error);
	}
};
//DELETE ONE
exports.deleteOne = async () => {
	try {
		if (argv.artwork) {
			await Record.destroy( {
				where: {
					artwork: argv.artwork
				}
			})
		}
		else if (argv.artist) {
			await Record.destroy({
				where: {
					artist: argv.artist
				}
			})
		}
		else if (argv.gallery) {
			await Record.destroy({
				where: {
					gallery: argv.gallery
				}
			})
		}
		else {
			console.log('deleted some data');
		}
	} catch (error) {
		console.log(error)
	}
}
//DELETE EVERYTHING
exports.deleteAll = async () => {
	try {
		await Record.destroy(
			{
				truncate : true
			}
		)
		console.log('everything is destroyed!!!')
	} catch (error) {
		console.log(error)
	}
};
