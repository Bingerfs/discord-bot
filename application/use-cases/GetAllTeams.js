module.exports = (TeamRepository) => {
	const execute = async () => {
		const res = await TeamRepository.getAll();
		return res;
	};

	return execute;
};