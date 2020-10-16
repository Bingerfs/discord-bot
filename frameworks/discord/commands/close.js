const fs = require('fs');
module.exports = (dependecies) => {
	return {
		name: 'close',
		description: 'Closes tourney registration',
		execute(message, args) {
			if(!message.member.roles.cache.some((role) => role.name === 'Dev')) return message.reply('You are not allowed to use this command');
			const conf = require('../../../config.json');
			conf.tourneyStatus = 'check in';
			fs.writeFile('config.json', JSON.stringify(conf, null, 2), (error)=>{
				if(error) console.log(error);
				else message.channel.send('@here registration closed');
			});
		},
	};
};