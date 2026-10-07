import type { ChatCommandContext } from "../types/chat-command-type";

export const ping = async ({ message, prefix, args }: ChatCommandContext): Promise<void> => {
    await message.reply({
        content: `Pong!`,
    });
};