const TeamRepository = require('../../../application/contracts//TeamRepository');

module.exports = class FirebaseTeamRepository extends TeamRepository {
	constructor(teamCollectionRef) {
		super();
		this.teamCollectionRef = teamCollectionRef;
	}

	async register(team) {
		try {
			const res = await this.teamCollectionRef.doc().create(team);
			return res;
		}
		catch (error) {
			throw new Error('Could not register team');
		}
	}

	async getAll() {
		try {
			const res = await this.teamCollectionRef.get();
			return res;
		}
		catch (error) {
			throw new Error('Error while getting all teams');
		}
	}

	async deleteAll() {
		try {
			const res = await this.teamCollectionRef.get();
			res.forEach((team) =>{
				team.ref.delete();
			});
			return res;
		}
		catch (error) {
			throw new Error('Error while deleting all teams');
		}
	}

	async findBy(playerId) {
		try {
			const res = await this.teamCollectionRef.where('playersId', 'array-contains', playerId).get();
			return res;
		}
		catch (error) {
			throw new Error('Error while retrieving by playerId');
		}
	}
};