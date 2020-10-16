const PlayerController = require('../../../controllers/players/PlayerController');
module.exports = (dependencies) => {
	return {
		name: 'unregister',
		description: 'Unregister an user',
		execute(message, args) {
			const { tourneyStatus } = require('../../../config.json');
			if(tourneyStatus !== 'registration') return message.reply('The tournament is not in the registration phase');
			const controller = PlayerController(dependencies);
			controller.deleteRegisteredPlayer(message.author.id).then((res) => {
				message.reply(res.message);
				message.client.emit('playersUpdated', message);
			});
		},
	};
};