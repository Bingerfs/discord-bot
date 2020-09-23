const fs = require('fs');

const numberGenerator = (max)=>{
	const min = 0;
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};

module.exports = {
	/*name: 'shuffle',
	description: 'shuffle and make teams',
	execute(message, args) {
		const listOfPlayers = JSON.parse(fs.readFileSync('player.json', 'utf8'));
		console.log(listOfPlayers);
		if(listOfPlayers.length % 3)
			message.reply('Number of players must be at least a multiple of 3');
		else{
			const listOfTeams = [];
			for(let team = 0; team < listOfPlayers.length; team++) {
				const teamEl = [];
				const teamObj = {
					players: [],
					checkinStatus: 'not done',
				};
				for(let player = 0; player < 3; player++) {
					const index = numberGenerator(listOfPlayers.length);
					teamEl.push(listOfPlayers[index]);
					listOfPlayers.splice(index, 1);
				}
				teamObj.players = teamEl;
				listOfTeams.push(teamObj);
			}
			fs.writeFile('team.json', JSON.stringify(listOfTeams), error =>{
				if(error)
					console.log(error);
				else {
					let messageTeams = '';
					for(const [i, value] of listOfTeams.entries()) {
						messageTeams = messageTeams + 'Team ' + (i + 1) + '\n';
						value.players.map((player, index)=>{
							messageTeams = messageTeams + (index + 1) + '. <@' + player.id + '>\n';
						});
					}
					message.reply(messageTeams);
				}
			});
		}
	},*/
};