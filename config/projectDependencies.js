const DiscordJsService = require('../frameworks/discord/DiscordJsServices');
module.exports = (() => {
	return {
		DatabaseService: null,
		DiscordService: new DiscordJsService(),
	};
})();