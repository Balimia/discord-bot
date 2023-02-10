import BotClient from './constructors/BotClient';
import { TOKEN } from './config.json';
import { join } from 'path';
import { readdirSync } from 'fs';

const client = new BotClient();
const handlersDir = join(__dirname, 'handlers');

// Initialising the BotClient by attaching events and commands
readdirSync(handlersDir).forEach((handler) => {
	require(`${handlersDir}/${handler}`)(client);
});

client.login(TOKEN);
