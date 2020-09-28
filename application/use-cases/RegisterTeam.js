module.exports = (TeamRepository) => {
	const execute = async (team) => {
		const res = await TeamRepository.register(team);
		return 'Team registered successfully';
	};

	return execute;
};