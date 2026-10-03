import { Client, IntentsBitField, BitFieldResolvable, GatewayIntentsString, Partials, } from "discord.js";
import dotenv from "dotenv"

dotenv.config();

export class ExetendedClient extends Client {
    constructor(){
        super({
            intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<GatewayIntentsString, number>,
            partials: [
                Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent,
                Partials.Message, Partials.Reaction, Partials.ThreadMember, Partials.User
            ]
        })
    }
    public Start () {
        this.login(process.env.BOT_TOKEN)
    }
}