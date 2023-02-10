import { Events, Message } from 'discord.js';
import { BotEvent } from '../types';

// This event is fired when a message is posted in any server the bot is in
// TODO: consider removing this event as slash commands have replaced written commands
const event: BotEvent = {
	name: Events.MessageCreate,
	execute(message: Message) {
		// console.log(message);
	},
};

module.exports = event;
