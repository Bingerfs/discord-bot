const fs = require('fs');
const PlayerController = require('../../../controllers/players/PlayerController');

module.exports = (dependencies) => {
	return {
		name: 'players',
		description: 'Shows all registered players',
		execute(message, args) {
			const controller = PlayerController(dependencies);
			controller.getAllRegisteredPlayers().then((res) => {
				message.reply(res.message);
			});
		},
	};
};