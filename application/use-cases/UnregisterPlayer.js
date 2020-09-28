const Player = require('../../entities/player');


module.exports = (PlayersRepository) => {
	const execute = async (id) => {
		const res = await PlayersRepository.deleteById(id);
		return 'Player unregistered successfully';
	};

	return execute;
};