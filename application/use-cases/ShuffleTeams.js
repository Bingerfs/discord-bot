const GetAllRegisteredPlayers = require('./GetAllRegisteredPlayers');
const RegisterTeam = require('./RegisterTeam');

const spq = require('shuffled-priority-queue');
const queue = spq();

const teamArraysInitializer = (array, sizeOfTeam, sizePlayers) => {
	for(let i = 0; i < Math.ceil(sizePlayers / sizeOfTeam); i++) {
		array.push([]);
	}
};

module.exports = (DatabaseServices) => {
	const execute = async (sizeOfTeam) => {
		const getAllRegisteredCommand = GetAllRegisteredPlayers(DatabaseServices.playerRepository);
		const registerTeamCommand = RegisterTeam(DatabaseServices.teamRepository);
		const playersSnapshot = await getAllRegisteredCommand();
		if(playersSnapshot.size < 2 * sizeOfTeam) throw new Error('Not enough players registered');
		const teamsArray = [];
		const playerDocsArray = playersSnapshot.docs;
		teamArraysInitializer(teamsArray, sizeOfTeam, playerDocsArray.length);
		playerDocsArray.map(player => {
			queue.add({
				priority: player.data().level,
				value: player.id,
			});
		});
		while(queue.length) {
			teamsArray.map(team => team.push(queue.shift().value));
		}
		teamsArray.map(async team => {
			await registerTeamCommand({ playersId: team, checkInStatus: false });
		});
		return 'Teams shuffled successfully';
	};
	return execute;
};