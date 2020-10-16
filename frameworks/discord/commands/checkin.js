const fs = require('fs');
const TeamController = require('../../../controllers/teams/TeamController');
module.exports = (dependencies) => {
	return {
		name: 'checkIn',
		description: 'Check in some minutes before the tourney starts',
		execute(message, args) {
			const { tourneyStatus } = require('../../../config.json');
			if(tourneyStatus !== 'check in') return message.reply('Tourney is not in check in phase');
			const controller = TeamController(dependencies);
			controller.checkInTeam(message.author.id).then((res) => {
				message.reply(res.message);
				message.client.emit('teamsUpdated', message);
			});
		},
	};
};