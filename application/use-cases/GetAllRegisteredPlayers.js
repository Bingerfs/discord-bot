module.exports = (PlayersRepository) => {
	const execute = async () => {
		const res = await PlayersRepository.getAll();
		return res;
	};

	return execute;
};