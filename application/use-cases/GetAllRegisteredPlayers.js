module.exports = (PlayersRepository) => {
	const execute = async () => {
		const res = await PlayersRepository.getAll();
		console.log(res.docs);
		return res;
	};

	return execute;
};