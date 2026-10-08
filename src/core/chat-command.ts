import { Events, type Client } from "discord.js";
import { ChatCommand } from "../types/chat-command-type"
import { ping } from "../service/ping"
import { roll } from "../service/roll";

export const chatCommands: ChatCommand[] = [
      { name: "ping", execute: ping },
      { name: "r", execute: roll }
]

export const registerChatCommand = (client: Client, prefix: string): ChatCommand[] => {
      client.on(Events.MessageCreate, async (message) => {    
            if (message.author.bot || !message.content.startsWith(prefix)) return;

            try {
                  const [commandName, ...args] = message.content.slice(prefix.length).trim().split(/\s+/u);
                  const command = chatCommands.find(({ name }) => name === commandName?.toLowerCase());

                  if (command) await command.execute({ message, prefix, args });
            }
            catch (error) {
                  console.error("Não foi possivel executar o chat-command", error);
            }
      })


      return chatCommands;
}