const fs = require('fs');
const TeamController = require('../../../controllers/teams/TeamController');

module.exports = (dependencies) => {
	return {
		name: 'shuffle',
		description: 'shuffle and make teams',
		execute(message, args) {
			const controller = TeamController(dependencies);
			console.log(args);
			controller.shuffleTeams(args[0]).then((resShuffle)=> {
				controller.getAllTeams().then((resTeams) => {
					message.reply(resTeams.message);
				});
			}, (error) => {
				message.reply(error.message);
			});
		},
	};
};