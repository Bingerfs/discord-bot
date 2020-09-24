const PlayerRepository = require('../../../application/contracts/playerRepository');

module.exports = class FirebasePlayerRepository extends PlayerRepository {
	constructor(playerCollectionRef) {
		super();
		this.playerCollectionRef = playerCollectionRef;
	}

	async register(player) {
		try {
			const res = await this.playerCollectionRef.doc(player.id).set({ nickname: player.nickname });
			return res;
		}
		catch (error) {
			throw new Error('Error. Player not registered');
		}
	}

	async findById(id) {
		try {
			const res = await this.playerCollectionRef.doc(id).get();
			return res.data();
		}
		catch (error) {
			throw new Error('Error while searching for player');
		}
	}
} ;