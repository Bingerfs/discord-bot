const fs = require('fs');
//const allRegistered = require('./allRegistered');
module.exports = {
	/*name: 'unregister',
	description: 'Unregister an user',
	execute(message, args) {
		let listOfPlayers = JSON.parse(fs.readFileSync('player.json'));
		listOfPlayers = listOfPlayers.filter((player) => !(player.id === message.author.id));
		console.log(listOfPlayers);
		fs.writeFile('player.json', JSON.stringify(listOfPlayers), (error)=>{
			if(error)
				console.log(error);
			else
				allRegistered.execute(message, args);
		});
	},*/
};