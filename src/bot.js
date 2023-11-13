import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();
const client = new Client({ 
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ],
 });


client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag} !`);
});

client.on('messageCreate', (message) => {
    const userInput = message.content.toLowerCase();
    if (message.content === 'ping'&& !message.author.bot) {
        message.reply('pong ! un peu de respect pour les bots !');
    }
    if (userInput == "!commands" || userInput == "!help") {
        message.reply("this bot operates on the following commands: !help !commands !age !math");
    }
    if (userInput == "!age") {
        console.log(message.author.createdAt);
        message.reply("you are " + (new Date().getFullYear() - message.author.createdAt.getFullYear()) + " years old");
    }
    if (userInput == "!math") {
        message.reply(" 59 * 836 * 852 = " + (59 * 836 * 852));
    }


});


client.login(process.env.TOKEN);