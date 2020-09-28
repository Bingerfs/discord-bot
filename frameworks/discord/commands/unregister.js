const PlayerController = require('../../../controllers/players/PlayerController');
module.exports = (dependencies) => {
	return {
		name: 'unregister',
		description: 'Unregister an user',
		execute(message, args) {
			const controller = PlayerController(dependencies);
			controller.deleteRegisteredPlayer(message.author.id).then((res) => {
				console.log(res);
			});
		},
	};
};