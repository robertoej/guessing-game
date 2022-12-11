const MAX = 10
const MIN = 1

const secret = Math.floor(Math.random() * MAX) + 1
console.log(secret)
const buttonElement = document.getElementById("checkButton")
const guessInput = document.getElementById("guess")
buttonElement.onclick = () => {
    let guessedNumber = guessInput.value
    let [isValid, reason] = isInvalid(guessedNumber)
    if (isValid) {
        if (isGuessRight(secret, guessedNumber)) {
            alert("you got it")
        } else {
            alert("it is wrong: " + tip(secret, guessedNumber))
        }
    } else {
        alert("Number is not valid: " + reason)
    }
}

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