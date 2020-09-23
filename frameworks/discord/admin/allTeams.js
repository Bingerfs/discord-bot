const fs = require('fs');
module.exports = {
	/*name: 'teams',
	description: 'Shows all teams shuffled',
	execute(message, args) {
		const listOfTeams = JSON.parse(fs.readFileSync('team.json'));
		if(listOfTeams == 0)
			return message.reply('No teams were registered yet');
		let messageTeams = '';
		listOfTeams.map((team, index)=>{
			messageTeams = messageTeams + 'Team ' + (index + 1) + '\n';
			for(const player of team.players)
				messageTeams = messageTeams + '- ' + player.name + '\n';
			messageTeams = messageTeams + '\tcheck in status:' + team.checkinStatus + '\n';
		});
		message.reply(messageTeams);
	},*/
};