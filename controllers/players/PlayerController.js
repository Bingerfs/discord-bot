const RegisterPlayer = require('../../application/use-cases/RegisterPlayer');
const UnregisterPlayer = require('../../application/use-cases/UnregisterPlayer');
const GetAllRegisteredPlayers = require('../../application/use-cases/GetAllRegisteredPlayers');
const DeleteAllPlayers = require('../../application/use-cases/DeleteAllPlayers');
module.exports = (dependencies) => {
	const { playerRepository, substituteRepository, highLeveledRepository } = dependencies.DatabaseServices;

	const registerNewPlayer = (player) => {
		const registerPlayerCommand = RegisterPlayer(dependencies.DatabaseServices);
		const res = registerPlayerCommand(player).then((response) => {
			return { message: response };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	const deleteRegisteredPlayer = (id) => {
		const unregisterPlayerCommand = UnregisterPlayer(playerRepository);
		const res = unregisterPlayerCommand(id).then((response) => {
			return { message: response };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	const getAllRegisteredPlayers = () => {
		const getAllRegisteredCommand = GetAllRegisteredPlayers(playerRepository);
		const res = getAllRegisteredCommand().then((response) =>{
			let message = 'Registered players\n';
			let playerNumber = 1;
			response.forEach((value) => {
				message = message + playerNumber + '. <@' + value.id + '>\n';
				playerNumber++;
			});
			return { message: message };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	const deleteAllRegisteredPlayers = () => {
		const deleteAllRegisteredCommand = DeleteAllPlayers(playerRepository);
		const res = deleteAllRegisteredCommand().then((response) => {
			return { message: response };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	const registerAsSub = (player) => {
		const registerPlayerCommand = RegisterPlayer(substituteRepository);
		const res = registerPlayerCommand(player).then((response) => {
			return { message: response };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	const unregisterAsSub = (id) => {
		const unregisterPlayerCommand = UnregisterPlayer(substituteRepository);
		const res = unregisterPlayerCommand(id).then((response) => {
			return { message: response };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	const getAllSubPlayers = () => {
		const getAllSubsCommand = GetAllRegisteredPlayers(substituteRepository);
		const res = getAllSubsCommand().then((response) =>{
			let message = 'Registered substitute players\n';
			let playerNumber = 1;
			response.forEach((value) => {
				message = message + playerNumber + '. <@' + value.id + '>\n';
				playerNumber++;
			});
			return { message: message };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	const registerAsHighLevel = (player) => {
		const registerPlayerCommand = RegisterPlayer(highLeveledRepository);
		const res = registerPlayerCommand(player).then((response) => {
			return { message: response };
		}, (err) => {
			return { message: err.message };
		});
		return res;
	};

	return{
		registerNewPlayer,
		deleteRegisteredPlayer,
		getAllRegisteredPlayers,
		deleteAllRegisteredPlayers,
		registerAsSub,
		unregisterAsSub,
		getAllSubPlayers,
		registerAsHighLevel,
	};
};