const fs = require('fs');
module.exports = {
	name: 'end',
	description: 'Tourney ending',
	execute(message, args) {
		const conf = require('../config.json');
		conf.tourneyStatus = 'none';
		fs.writeFile('config.json', JSON.stringify(conf, null, 2), (error)=>{
			if(error) console.log(error);
			else message.reply('Tourney ended');
		});
	},
};