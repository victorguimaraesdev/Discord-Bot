import { ChatCommand } from "../types/chat-command-type"
import { ping } from "../service/ping"

export const chatCommands: ChatCommand[] = [
      {name: "ping", execute: ping}
]