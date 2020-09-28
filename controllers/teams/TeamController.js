const ShuffleTeams = require('../../application/use-cases/ShuffleTeams');
const GetAllTeams = require('../../application/use-cases/GetAllTeams');

module.exports = (dependencies) => {
	const { playerRepository, teamRepository } = dependencies.DatabaseServices;

	const shuffleTeams = (sizeOfTeam) => {
		const shuffleTeamsCommand = ShuffleTeams(dependencies.DatabaseServices);
		const res = shuffleTeamsCommand(sizeOfTeam).then((response) => {
			return { message: response };
		}, (error) => {
			throw error;
		});
		return res;
	};

	const getAllTeams = () => {
		const getAllTeamsCommand = GetAllTeams(teamRepository);
		const res = getAllTeamsCommand().then((response) => {
			let message = 'All Teams\n';
			let teamNumber = 1;
			response.forEach((team) => {
				message = message + 'Team ' + teamNumber + '\n';
				const players = team.data().playersId;
				const playersMessage = players.reduce((stringPlayers, playerId) => { return stringPlayers + '* <@' + playerId + '>\n'; }, '');
				message = message + playersMessage;
				teamNumber++;
			});
			return { message: message };
		}, (error) => {
			return { message: error.message };
		});
		return res;
	};

	return{
		shuffleTeams,
		getAllTeams,
	};
};