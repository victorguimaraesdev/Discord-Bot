import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const token = process.env.BOT_TOKEN;

if (!token || typeof token !== 'string'){
    throw new Error("Token não localizado ou invalido")
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]  
})


client.once("clientReady", () => {
    console.log(`O bot ${client.user?.tag} foi inicializado`)
})


client.login(token)