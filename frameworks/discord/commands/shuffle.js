const fs = require('fs');
const TeamController = require('../../../controllers/teams/TeamController');

module.exports = (dependencies) => {
	return {
		name: 'shuffle',
		description: 'shuffle and make teams',
		execute(message, args) {
			const { tourneyStatus } = require('../../../config.json');
			if(tourneyStatus !== 'check in') return message.reply('The tournament is not in the registration phase');
			if(!args.length) return message.reply('Size of teams not specified');
			if(!message.member.roles.cache.some((role) => role.name === 'Dev')) return message.reply('You are not allowed to use this command');
			const controller = TeamController(dependencies);
			controller.shuffleTeams(args[0]).then((resShuffle)=> {
				message.client.emit('teamsUpdated', message);
				message.channel.send(resShuffle.message);
			}, (error) => {
				message.reply(error.message);
			});
		},
	};
};