

import getUserNumber from './guessInput.js'
import generateNewNumber from './generateNewNumber.js'

// const GuessingGame = {
    
    secret:Math.floor(Math.random() * MAX) + 1
// }

/**
 * Guessing Game:
 * User provides their name and must guess a random number between 1-10
 */

class GuessingGame {
    constructor(min=1,max = 10, config = {
        numberIsUnique: false
        }){
        
        Object.assign(this,{
            elements:{
                button:document.querySelector('#checkButton'),
                input:document.querySelector('#guess')
            },
            secret:0,
            range:[min,max],
            messages:{
                low:'',
                high:'',
                proximity:[
                    'just one number away',
                    'very warm',
                    'warm',
                    '',
                    '',
                    ''
                ],
                outside:'',
                string:'',
                nan:''
                
            },
            name:'',
            history:[]
        })

    }
}

GuessingGame.prototype.getUserNumber = getUserNumber;
GuessingGame.prototype.generateNewNumber = generateNewNumber;

const MAX = 10
const MIN = 1

// const secret = Math.floor(Math.random() * MAX) + 1


console.log(secret)





GuessingGame.prototype.tip = function tip(secret, number) {
    if (number < secret) {
        return "your guess is too low"
    }
    if (number > secret) {
        return "your guess is too high"
    }
}

GuessingGame.prototype.isGuessRight = function isGuessRight(secret, number) {
    return number == secret
}

GuessingGame.prototype.isInvalid = function isInvalid(number) {
    number = parseInt(number, 10)
    if (isNaN(number)) {
        return [false, "it is not a number"]
    } else if (number < this.range[0]) {
        return [false, "number is out of range: too low"]
    } else if (number > this.range[1]) {
        return [false, "number is out of range: too high"]
    }
    return [true, ""]
}

export default GuessingGame;