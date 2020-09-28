const DatabaseServices = require('../../../application/contracts/DatabaseServices');
const admin = require('firebase-admin');
const serviceAccount = require('../../../admin.json');
const FirebasePlayerRepository = require('./FirebasePlayerRepository');
const FirebaseTeamRepository = require('./FirebaseTeamRepository');

module.exports = class FirebaseDbServices extends DatabaseServices {
	constructor() {
		super();
		this.initDatabase();
	}

	async initDatabase() {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL: 'https://bot-splatoon.firebaseio.com',
			authDomain: 'bot-splatoon.firebaseapp.com',
		});
		const db = admin.firestore();
		const playersCollectionRef = db.collection('players');
		const teamsCollectionRef = db.collection('teams');
		this.playerRepository = new FirebasePlayerRepository(playersCollectionRef);
		this.teamRepository = new FirebaseTeamRepository(teamsCollectionRef);
	}
};