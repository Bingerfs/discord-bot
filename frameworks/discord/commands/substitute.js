const PlayerController = require('../../../controllers/players/PlayerController');

module.exports = (dependencies) => {
	return {
		name: 'sub',
		description: 'register as a substitute to the tourney',
		execute(message, args) {
			const player = {
				nickname: message.author.username,
				id: message.author.id,
			};
			const controller = PlayerController(dependencies);
			controller.registerAsSub(player).then((res) => {
				message.reply(res.message);
			});
		},
	};
};