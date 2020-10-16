const ShuffleTeams = require('../../application/use-cases/ShuffleTeams');
const GetAllTeams = require('../../application/use-cases/GetAllTeams');
const DeleteAllTeams = require('../../application/use-cases/DeleteAllTeams');
const CheckInTeam = require('../../application/use-cases/CheckInTeam');

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
				const checkInStatus = team.data().checkInStatus;
				message = message + '- Check in: ' + checkInStatus + '\n';
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

	const deleteAllTeamsShuffled = () => {
		const deleteAllTeamsCommand = DeleteAllTeams(teamRepository);
		const res = deleteAllTeamsCommand().then((response) =>{
			return { message: response };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	const checkInTeam = (playerId) => {
		const checkInTeamCommand = CheckInTeam(teamRepository);
		const res = checkInTeamCommand(playerId).then((response) => {
			return { message: response };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	return{
		shuffleTeams,
		getAllTeams,
		deleteAllTeamsShuffled,
		checkInTeam,
	};
};