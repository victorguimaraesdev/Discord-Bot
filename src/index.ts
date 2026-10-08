import { Client, GatewayIntentBits } from "discord.js";
import { registerChatCommand } from "./core/chat-command";

import "dotenv/config";

const token = process.env.BOT_TOKEN;
const prefix = process.env.BOT_PREFIX ?? "!";

if (prefix.length === 0) {
    throw new Error("Prefix não localizado");
}
 
if (!token || typeof token !== 'string'){
    throw new Error("Token não localizado")
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]  
})

const chatCommands = registerChatCommand(client, prefix);

client.once("clientReady", () => {
    console.log(`O bot ${client.user?.tag} foi inicializado`)
    console.info(`${chatCommands.length} comandos de chat carregados.`);
})


client.login(token)