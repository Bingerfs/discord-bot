const fs = require('fs');

module.exports = (dependencies) => {
	return {
		name: 'setPlayersChannel',
		description: 'Displays a list of all players registered',
		execute(message, args) {
			if(!args.length) return message.channel.send('No channel specified');
			if(!message.member.roles.cache.some((role) => role.name === 'Dev' || role.name === 'guest')) return message.reply('You are not allowed to use this command');
			const config = require('../../../config.json');
			const selectedChannel = message.mentions.channels.first();
			config.playersChannel = selectedChannel.id;
			fs.writeFile('config.json', JSON.stringify(config, null, 2), (error)=>{
				if(error) console.log(error);
			});
			selectedChannel.send('Channel configuration saved successully');
		},
	};
};