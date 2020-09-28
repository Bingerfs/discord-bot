module.exports = class DatabaseServices {

	constructor() {
		this.playerRepository = null;
		this.teamRepository = null;
	}

	initDatabase() {
		return Promise.reject(new Error('not implemented'));
	}

};