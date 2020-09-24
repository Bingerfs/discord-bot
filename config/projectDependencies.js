const DiscordJsService = require('../frameworks/discord/DiscordJsServices');
const FirebaseDbServices = require('../frameworks/persistance/firebase/FirebaseDbServices');
module.exports = (() => {
    const DbServices = new FirebaseDbServices();
	return {
		DatabaseService: DbServices,
		DiscordService: new DiscordJsService({ DatabaseServices: DbServices }),
	};
})();

