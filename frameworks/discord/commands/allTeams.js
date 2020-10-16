const fs = require('fs');
const TeamController = require('../../../controllers/teams/TeamController');

module.exports = (dependencies) => {
	return {
		name: 'teams',
		description: 'Shows all registered teams',
		execute(message, args) {
			const controller = TeamController(dependencies);
			const { shuffleChannel } = require('../../../config.json');
			const channelShuffle = message.guild.channels.resolve(shuffleChannel);
			channelShuffle.messages.fetch(channelShuffle.lastMessageID).then(messageShuffle => {
				controller.getAllTeams().then((res) => {
					messageShuffle.edit(res.message);
				});
			});
		},
	};
};