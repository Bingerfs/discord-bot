const fs = require('fs');
const PlayerController = require('../../../controllers/players/PlayerController');

module.exports = (dependencies) => {
	return {
		name: 'players',
		description: 'Shows all registered players',
		execute(message, args) {
			const controller = PlayerController(dependencies);
			const { playersChannel } = require('../../../config.json');
			const channelPlayers = message.guild.channels.resolve(playersChannel);
			channelPlayers.messages.fetch(channelPlayers.lastMessageID).then(messagePlayers => {
				controller.getAllRegisteredPlayers().then((res) => {
					messagePlayers.edit(res.message);
				});
			});
		},
	};
};