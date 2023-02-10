import { Events } from 'discord.js';
import BotClient from '../constructors/BotClient';
import { BotEvent } from '../types';

// This event is fired once the bot is ready
const event: BotEvent = {
	name: Events.ClientReady,
	once: true,
	execute(client: BotClient) {
		console.log(`Logged in as ${client.user?.tag}`);
	},
};

module.exports = event;
