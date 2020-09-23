const fs = require('fs');
module.exports = {
	/* name: 'players',
	description: 'Shows all registered players',
	execute(message, args) {
		fs.readFile('player.json', (err, data)=>{
			if (err)
				console.log(err);
			else {
				const listOfPlayers = JSON.parse(data);
				console.log(listOfPlayers);
				if(listOfPlayers == 0)
					return message.reply('There are no players registered');
				let messagePlayers = 'All registered players\n';
				listOfPlayers.map((player, index)=>{
					messagePlayers = messagePlayers + (index + 1) + '. <@' + player.id + '>\n';
				});
				message.reply(messagePlayers);
			}
		});
	},*/
};