module.exports = (TeamsRepository) => {
	const execute = async () => {
		const res = await TeamsRepository.deleteAll();
		return 'Teams list reseted';
	};

	return execute;
};