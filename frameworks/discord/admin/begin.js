/* const fs = require('fs');
const conf = require('../../../config.json');
module.exports = {
	name: 'begin',
	description: 'Start a new tournament',
	execute(message, args) {
		if(conf.tourneyStatus !== 'none')
			return message.reply('Tourney has already started');
		const emptyList = [];
		conf.tourneyStatus = 'registration';
		fs.writeFile('team.json', JSON.stringify(emptyList), ()=> '');
		fs.writeFile('player.json', JSON.stringify(emptyList), (error)=>{
			if(error)
				console.log(error);
		});
		fs.writeFile('config.json', JSON.stringify(conf, null, 2), (error)=>{
			if(error)
				console.log(error);
			else
				message.reply('New tournament started');
		});
	},
};*/