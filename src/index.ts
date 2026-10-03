import { ExetendedClient } from "./structs/ExtendedClient";

export * from "colors";

const client = new ExetendedClient();

client.Start();

export { client }

client.on("clientReady", () => {
    console.log("Bot online".green)
})
