const RegisterPlayer = require('../../application/use-cases/RegisterPlayer');
module.exports = () => {
	// const { DiscordService } = dependencies;

	const registerNewPlayer = (player) => {
		/* const registerPlayerCommand = RegisterPlayer(playerRepository);
		registerPlayerCommand.execute(player).then((response) => {
			return { message: response };
		}, (err) => {
			return { message: err };
		});*/
		console.log(player);
	};

	return{
		registerNewPlayer,
	};
};