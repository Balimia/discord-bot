import { Events, Guild } from 'discord.js';
import { BotEvent } from '../types';

// This event is fired when the bot is added to a new server
const event: BotEvent = {
	name: Events.GuildCreate,
	execute(guild: Guild) {
		console.log(guild);
	},
};

module.exports = event;
