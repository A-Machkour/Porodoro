import { Client } from "discord.js";

const client = new Client({ intents:['Guilds', 'GuildMessages'] });
const TOKEN= 'MTE0NjE1ODkyNjM5NjY3NDExOA.GGKk-2.upAnVVs9Bwdn3S--fMQ2Qno_gP10hjNLUm_F0E';

client.login(TOKEN);