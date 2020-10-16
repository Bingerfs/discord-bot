module.exports = (TeamsRepository) => {
	const execute = async (playerId) => {
		const res = await TeamsRepository.findBy(playerId);
		if(res.empty) return 'You are not part of any team';
		const team = res.docs[0];
		team.ref.update({ checkInStatus: true });
		return 'Your team has been checked in';
	};

	return execute;
};