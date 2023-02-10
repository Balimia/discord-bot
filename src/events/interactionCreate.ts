import { BaseInteraction, Events } from 'discord.js';
import { BotEvent } from '../types';

// This event is fired when a user uses an interaction (slash commands, buttons, drop-down menus, etc.)
const event: BotEvent = {
	name: Events.InteractionCreate,
	async execute(interaction: BaseInteraction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		await command.execute(interaction);
	},
};

module.exports = event;
