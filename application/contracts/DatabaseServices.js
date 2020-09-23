module.exports = class DatabaseServices {

	constructor() {
		this.playerRepository = null;
	}

	initDatabase() {
		return Promise.reject(new Error('not implemented'));
	}

};