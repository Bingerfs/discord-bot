const fs = require('fs');
const PlayerController = require('../../../controllers/players/PlayerController');

module.exports = (dependencies) => {
	return {
		name: 'register',
		description: 'register to tourney',
		execute(message, args) {
			const { tourneyStatus } = require('../../../config.json');
			if(tourneyStatus !== 'registration') {return message.reply('The tournament is not in the registration phase');}
			const player = {
				nickname: message.author.username,
				id: message.author.id,
			};
			const controller = PlayerController(dependencies);
			controller.registerNewPlayer(player).then((res) => {
				message.reply(res.message);
			});
		},
	};
};