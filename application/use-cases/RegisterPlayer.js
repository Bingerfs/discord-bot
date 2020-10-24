const Player = require('../../entities/player');


module.exports = (DatabaseServices) => {
	const execute = async (player) => {
		const playerFound = await DatabaseServices.playerRepository.findById(player.id);
		if(playerFound) {throw new Error('Player has been already registered');}
		const highLevelFound = await DatabaseServices.highLeveledRepository.findById(player.id);
		if(highLevelFound) player.level = 2;
		await DatabaseServices.playerRepository.register(player);
		return 'Player registered successfully';
	};

	return execute;
};