const fs = require('fs');
module.exports = {
	/*name: 'checkin',
	description: 'Check in some minutes before the tourney starts',
	execute(message, args) {
		const { tourneyStatus } = require('../config.json');
		if(tourneyStatus !== 'check in')
			return message.reply('Tourney is not in check in phase');
		const listOfTeams = JSON.parse(fs.readFileSync('team.json'));
		listOfTeams.map((team) =>{
			const isPlayerFound = team.players.some((value)=> value.id === message.author.id);
			if(isPlayerFound) {
				team.checkinStatus = 'checked in';
				fs.writeFile('team.json', JSON.stringify(listOfTeams,null, 2), (error)=>{
					if(error)
						console.log(error);
					else
						message.reply('Done, team checked in');
				});
			}
		});
	},*/
};