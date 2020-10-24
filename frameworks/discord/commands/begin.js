const fs = require('fs');
const PlayerController = require('../../../controllers/players/playerController');
const TeamController = require('../../../controllers/teams/TeamController');
module.exports = (dependencies) => {
	return {
		name: 'begin',
		description: 'Start a new tournament',
		execute(message, args) {
			if(!message.member.roles.cache.some((role) => role.name === 'Dev')) return message.reply('You are not allowed to use this command');
			const conf = require('../../../config.json');
			conf.tourneyStatus = 'registration';
			const controllerPlayer = PlayerController(dependencies);
			const controllerTeam = TeamController(dependencies);
			controllerPlayer.deleteAllRegisteredPlayers().then(res => {
				message.client.emit('playersUpdated', message);
				message.reply(res.message);
			});
			controllerTeam.deleteAllTeamsShuffled().then(res => {
				message.reply(res.message);
				message.client.emit('teamsUpdated', message);
			});
			fs.writeFile('config.json', JSON.stringify(conf, null, 2), (error)=>{
				if(error) console.log(error);
				else message.reply('New tournament started');
			});
		},
	};
};