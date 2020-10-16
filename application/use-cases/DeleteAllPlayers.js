module.exports = (PlayersRepository) => {
	const execute = async () => {
		const res = await PlayersRepository.deleteAll();
		return 'Players list reseted';
	};

	return execute;
};