import { ChatCommandContext } from "../types/chat-command-type";
import { getRandom } from "../utils/random-number";

export const roll = async ({ message, prefix, args }: ChatCommandContext): Promise<void> => {
    
    if (!args[0]) return;

    const result = args[0].match(/(\d+)d(\d+)/);

    if (!result || !result[1] || !result[2]) return;

    const numberOfDices = Number(result[1])
    const facesOfDices = Number(result[2])

    const array : Array<number> = [];

    for(let i = 0; i < numberOfDices; i++){
        array[i] = getRandom(1, facesOfDices)
    }  

    let showResult = `Dados rolados: ${args} \n`
    for (let i = 0; i < array.length; i++) {
        showResult += `Resultado ${i+1}: ${array[i]}\n`
    }

    await message.reply({
        content: showResult
    })
}