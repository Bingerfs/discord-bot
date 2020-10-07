const fs = require('fs');
const TeamController = require('../../../controllers/teams/TeamController');

module.exports = (dependencies) => {
	return {
		name: 'shuffle',
		description: 'shuffle and make teams',
		execute(message, args) {
			if(!args.length) return message.reply('Size of teams not specified');
			if(!message.member.roles.cache.some((role) => role.name === 'Dev')) return message.reply('You are not allowed to use this command');
			const controller = TeamController(dependencies);
			const { shuffleChannel } = require('../../../config.json');
			const channelShuffle = message.guild.channels.resolve(shuffleChannel);
			channelShuffle.messages.fetch(channelShuffle.lastMessageID).then(messageShuffle => {
				controller.shuffleTeams(args[0]).then((resShuffle)=> {
					controller.getAllTeams().then((resTeams) => {
						messageShuffle.edit(resTeams.message);
					});
					message.channel.send(resShuffle.message);
				}, (error) => {
					message.reply(error.message);
				});
			});
		},
	};
};