const fs = require('fs');
const PlayerController = require('../../../controllers/players/PlayerController');

module.exports = (dependencies) => {
	return {
		name: 'register',
		description: 'register to tourney',
		execute(message, args) {
			const { tourneyStatus } = require('../../../config.json');
			if(tourneyStatus !== 'registration')
				return message.reply('The tournament is not in the registration phase');
			const player = {
				name: message.author.username,
				id: message.author.id,
			};
			console.log(dependencies);
			const controller = PlayerController();
			controller.registerNewPlayer(player);

		},
	};
};