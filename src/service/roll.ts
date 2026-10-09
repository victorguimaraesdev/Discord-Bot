import { ChatCommandContext } from "../types/chat-command-type";
import { getRandom } from "../utils/random-number";

const rollDices = (numberOfDices: number, facesOfDices: number, modifier: number, args:string) => {
    const randomNumbers: Array<number> = [];
    let sumNumbers: number = 0

    for (let i = 0; i < numberOfDices; i++) {
        const varRandomNumber = getRandom(1, facesOfDices)
        randomNumbers[i] = varRandomNumber
        sumNumbers += varRandomNumber
    }

    sumNumbers += modifier

    let showResult = `${sumNumbers} <-- [`
    for (let i = 0; i < randomNumbers.length; i++) {
        showResult += ` ${randomNumbers[i]} `
    }
    showResult += `] ${args}`

    return showResult;
}

export const roll = async ({ message, prefix, args }: ChatCommandContext): Promise<void> => {

    if (!args[0]) return;

    const result = args[0].match(/(\d+)#(\d+)d(\d+)\+(\d+)/);

    if (!result || !result[1] || !result[2] || !result[3] || !result[4]) return;

    const numberOfRolls = Number(result[1])
    const numberOfDices = Number(result[2])
    const facesOfDices = Number(result[3])
    const modifier = Number(result[4])

    let showResult = ""

   for(let i = 0; i < numberOfRolls; i++) {
     showResult += `${rollDices(numberOfDices, facesOfDices, modifier, args[0])}\n`
   }

    await message.reply({
        content: showResult
    })
}
