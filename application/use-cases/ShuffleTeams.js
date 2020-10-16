const GetAllRegisteredPlayers = require('./GetAllRegisteredPlayers');
const RegisterTeam = require('./RegisterTeam');

const numberGenerator = (max)=>{
	const min = 0;
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
};

module.exports = (DatabaseServices) => {
	const execute = async (sizeOfTeam) => {
		const getAllRegisteredCommand = GetAllRegisteredPlayers(DatabaseServices.playerRepository);
		const registerTeamCommand = RegisterTeam(DatabaseServices.teamRepository);
		const playersSnapshot = await getAllRegisteredCommand();
		if(playersSnapshot.size < 2 * sizeOfTeam) throw new Error('Not enough players registered');
		const playerDocsArray = playersSnapshot.docs;
		while(playerDocsArray.length > 0) {
			let playerIdArray = [];
			for(let i = 0; i < sizeOfTeam; i++) {
				if(!playerDocsArray.length) break;
				const randomPlayerIndex = numberGenerator(playerDocsArray.length);
				playerIdArray.push(playerDocsArray[randomPlayerIndex].id);
				playerDocsArray.splice(randomPlayerIndex, 1);
			}
			registerTeamCommand({ playersId: playerIdArray, checkInStatus: false });
			playerIdArray = [];
		}
		return 'Teams shuffled successfully';
	};
	return execute;
};