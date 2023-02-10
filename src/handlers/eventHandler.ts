import { readdirSync } from 'fs';
import { join } from 'path';
import { PRODUCTION } from '../config.json';
import BotClient from '../constructors/BotClient';
import { BotEvent } from '../types';

// Registering event listeners to the client
module.exports = (client: BotClient) => {
	const eventsDir = join(__dirname, '../events');

	readdirSync(eventsDir).forEach((file) => {
		if ((PRODUCTION && !file.endsWith('.js')) || (!PRODUCTION && !file.endsWith('.ts'))) return;

		const event: BotEvent = require(`${eventsDir}/${file}`);

		try {
			event.once
				? client.once(event.name, (...args) => event.execute(...args))
				: client.on(event.name, (...args) => event.execute(...args));
		} catch (error) {
			console.error(error);
		}

		console.log(`Event registered: ${event.name}`);
	});
};
