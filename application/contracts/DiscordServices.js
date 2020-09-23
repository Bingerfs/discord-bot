module.exports = class DiscordServices {

	constructor() {
		this.clientDiscord = null;
	}

	initDiscordConnection() {
		return Promise.reject(new Error('not implemented'));
	}

	setupDiscordClient() {
		return Promise.reject(new Error('not implemented'));
	}
};