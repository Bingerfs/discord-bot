//const conf = require('../config.json');
const fs = require('fs');
module.exports = {
	/*name: 'close',
	description: 'Closes tourney registration',
	execute(message, args) {
		if(conf.tourneyStatus !== 'registration')
			return message.reply('Tourney is not in registration phase');
		conf.tourneyStatus = 'check in';
		fs.writeFile('config.json', JSON.stringify(conf, null, 2), (error)=>{
			if(error)
				console.log(error);
			else
				message.reply('@here registration closed');
		});
	},*/
};