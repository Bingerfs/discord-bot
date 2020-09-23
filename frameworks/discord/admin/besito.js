module.exports = {
	name: 'besito',
	description: 'gordito',
	execute(message, args) {
		if(args.includes('otter'))
			message.channel.send('https://tenor.com/view/otter-iloveyou-kiss-love-gif-7919850');
	},

};