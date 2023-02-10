import { REST, Routes } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import { PRODUCTION, TOKEN, APPLICATION_ID, TEST_SERVER_ID } from '../config.json';
import BotClient from '../constructors/BotClient';
import { SlashCommand } from '../types';

// Registers and deploys the bot's slash commands
module.exports = async (client: BotClient) => {
	const commandsDir = join(__dirname, '../commands');
	const commands: string[] = [];

	readdirSync(commandsDir).forEach((file) => {
		if ((PRODUCTION && !file.endsWith('.js')) || (!PRODUCTION && !file.endsWith('.ts'))) return;

		const command: SlashCommand = require(`${commandsDir}/${file}`);

		client.commands.set(command.data.name, command);
		commands.push(command.data.toJSON());
	});

	const rest = new REST({ version: '10' }).setToken(TOKEN);

	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const commandsDeploymentRoute = PRODUCTION
			? Routes.applicationCommands(APPLICATION_ID)
			: Routes.applicationGuildCommands(APPLICATION_ID, TEST_SERVER_ID);
		const data: string[] | any = await rest.put(commandsDeploymentRoute, { body: commands });

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
};
