module.exports = (dependencies) => {
	return {
		name: 'ping',
		description: 'Return delay info',
		async execute(message, args) {
            const m = await message.channel.send('Ping?');
            console.log(message.client.getMaxListeners());
			m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(message.client.ws.ping)}ms`);
		},
	};
};