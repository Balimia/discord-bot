import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import BotClient from './constructors/BotClient';

export interface BotEvent {
	name: string;
	once?: boolean | false;
	execute: (...args) => void;
}

export interface SlashCommand {
	data: SlashCommandBuilder | any;
	execute: (interaction: CommandInteraction) => Promise<void>;
}

declare module 'discord.js' {
	export interface Client {
		commands: Collection<string, SlashCommand>;
	}
}
