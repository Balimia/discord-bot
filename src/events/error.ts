import { Events } from 'discord.js';
import { BotEvent } from '../types';

// This event is fired when the bot encounters an error
const event: BotEvent = {
	name: Events.Error,
	execute(error: Error) {
		console.error(error);
	},
};

module.exports = event;
