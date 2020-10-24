module.exports = class DatabaseServices {

	constructor() {
		this.playerRepository = null;
		this.teamRepository = null;
		this.substituteRepository = null;
		this.highLeveledRepository = null;
	}

	initDatabase() {
		return Promise.reject(new Error('not implemented'));
	}

};