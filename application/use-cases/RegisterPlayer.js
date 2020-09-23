const Player = require('../../entities/player');


module.exports = (PlayersRepository) => {
	const execute = async (player) => {
		const playerFound = await PlayersRepository.findById(player.id);
		if(playerFound) {throw new Error('Player has been already registered');}
		const playerRegistered = new Player(player);
		await PlayersRepository.register(playerRegistered);
		return 'Player regitered successfully';
	};

	return execute;
};