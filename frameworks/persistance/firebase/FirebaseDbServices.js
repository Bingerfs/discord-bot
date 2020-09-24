const DatabaseServices = require('../../../application/contracts/DatabaseServices');
const admin = require('firebase-admin');
const serviceAccount = require('../../../admin.json');
const FirebasePlayerRepository = require('./FirebasePlayerRepository');

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
		this.playerRepository = new FirebasePlayerRepository(playersCollectionRef);
	}
};