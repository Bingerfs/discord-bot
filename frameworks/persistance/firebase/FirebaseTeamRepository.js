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
};