const DiscordServices = require('../../application/contracts/DiscordServices');
const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('../../config.json');
const { runInThisContext } = require('vm');

module.exports = class DiscordJsServices extends DiscordServices {

	constructor(dependencies) {
		super();
		this.clientDiscord = new Discord.Client();
		this.setupDiscordClient(dependencies);
		this.setupListeners();
	}

	initDiscordConnection() {
		console.log(process.env.NODE_ENV);
		this.clientDiscord.login(process.env.TOKEN);
	}

	setupDiscordClient(dependencies) {
		this.clientDiscord.commands = new Discord.Collection();
		const commandFiles = fs.readdirSync('./frameworks/discord/commands').filter(file => file.endsWith('.js'));
		for(const file of commandFiles) {
			const makeCommand = require('./commands/' + file);
			const command = makeCommand(dependencies);
			this.clientDiscord.commands.set(command.name, command);
		}
	}

	setupListeners() {
		this.clientDiscord.once('ready', () => {
			console.log('Ready!');
		});

		this.clientDiscord.on('message', message => {
			if(!message.content.startsWith(prefix) || message.author.bot) {return;}
			const args = message.content.slice(prefix.length).trim().split(/ +/);
			const command = args.shift();
			if(!this.clientDiscord.commands.has(command)) {return;}
			try {
				console.log(command);
				this.clientDiscord.commands.get(command).execute(message, args);
			}
			catch (error) {
				console.error(error);
				message.reply('Error');
			}
		});

		this.clientDiscord.on('playersUpdated', message => {
			try {
				this.clientDiscord.commands.get('players').execute(message);
			}
			catch (error) {
				message.reply(error);
			}
		});
	}

};