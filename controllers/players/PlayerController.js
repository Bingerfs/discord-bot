const RegisterPlayer = require('../../application/use-cases/RegisterPlayer');
module.exports = (dependencies) => {
	const { playerRepository } = dependencies.DatabaseServices;

	const registerNewPlayer = (player) => {
		const registerPlayerCommand = RegisterPlayer(playerRepository);
		const res = registerPlayerCommand(player).then((response) => {
			return { message: response };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	return{
		registerNewPlayer,
	};
};