const fs = require('fs');
const PlayerController = require('../../../controllers/players/PlayerController');

module.exports = (dependencies) => {
	return {
		name: 'subs',
		description: 'Shows all registered players',
		execute(message, args) {
			const controller = PlayerController(dependencies);
			controller.getAllSubPlayers().then((res) => {
				message.channel.send(res.message);
			});
		},
	};
};