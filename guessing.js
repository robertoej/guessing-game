

import getUserNumber from './guessInput.js'

const GuessingGame = {
    button:document.querySelector('#checkButton'),
    input:document.querySelector('#guess')
}

GuessingGame.getUserNumber = getUserNumber;

const MAX = 10
const MIN = 1

const secret = Math.floor(Math.random() * MAX) + 1


console.log(secret)





function tip(secret, number) {
    if (number < secret) {
        return "your guess is too low"
    }
    if (number > secret) {
        return "your guess is too high"
    }
}

function isGuessRight(secret, number) {
    return number == secret
}

function isInvalid(number) {
    number = parseInt(number, 10)
    if (isNaN(number)) {
        return [false, "it is not a number"]
    } else if (number < MIN) {
        return [false, "number is out of range: too low"]
    } else if (number > MAX) {
        return [false, "number is out of range: too high"]
    }
    return [true, ""]
}

export default GuessingGame;