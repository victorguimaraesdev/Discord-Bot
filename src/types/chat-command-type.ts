import type { Message } from "discord.js";

export type ChatCommandContext = {
    message: Message;
    prefix: string;
    args: string[];
};

export type ChatCommand = {
    name: string;
    execute: (context: ChatCommandContext) => Promise<void>;
};