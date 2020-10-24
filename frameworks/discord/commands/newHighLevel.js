const PlayerController = require('../../../controllers/players/PlayerController');

module.exports = (dependencies) => {
	return {
		name: 'newHighLevel',
		description: 'List a high leveled player',
		execute(message, args) {
			if(!args.length) return message.channel.send('No player specified');
			const player = {
				id: message.mentions.members.first().id,
				nickname: message.mentions.members.first().nickname,
			};
			const controller = PlayerController(dependencies);
			controller.registerAsHighLevel(player).then((res) => {
				message.reply(res.message);
			});
		},
	};
};