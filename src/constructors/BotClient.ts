import {
	ActivityType,
	Client,
	ClientOptions,
	Collection,
	GatewayIntentBits,
	Partials,
} from 'discord.js';
import { SlashCommand } from '../types';

/*
Initialises the client, through which we can interact with Discord.
The client is accessed throughout this project, so we charge it with additional features (i.e. our commands).
https://discord.js.org/#/docs/discord.js/main/class/Client
*/

const clientOptions: ClientOptions = {
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.DirectMessageReactions,
		GatewayIntentBits.MessageContent,
	],
	partials: [Partials.Message, Partials.Channel, Partials.Reaction],
	presence: {
		status: 'online',
		activities: [
			{
				name: 'DISCORD BOT',
				type: ActivityType.Playing,
			},
		],
	},
	shards: 'auto',
};

interface BotClient {
	commands: Collection<string, SlashCommand>;
}

class BotClient extends Client {
	constructor() {
		super(clientOptions);
		this.commands = new Collection<string, SlashCommand>();
	}
}

export default BotClient;
