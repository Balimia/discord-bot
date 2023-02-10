import { EmbedBuilder } from '@discordjs/builders';
import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../types';

// Displays some analytics in the form of an embed
module.exports = {
	data: new SlashCommandBuilder().setName('status').setDescription('Bot Status Report'),
	execute: async (interaction: CommandInteraction) => {
		const initialEmbed = new EmbedBuilder()
			.setAuthor({ name: 'Bot Status Report' })
			.setDescription(`Loading...`);

		const sent = await interaction.reply({
			embeds: [initialEmbed],
			fetchReply: true,
		});

		const description = `Websocket heartbeat: ${interaction.client.ws.ping}ms\nRoundtrip latency: ${
			sent.createdTimestamp - interaction.createdTimestamp
		}ms\n
		Current server: ${interaction.guild?.name}\nServer count: ${interaction.client.guilds.cache.size}`;

		const updatedEmbed = initialEmbed.setDescription(description);

		interaction.editReply({ embeds: [updatedEmbed] });
	},
} as SlashCommand;
