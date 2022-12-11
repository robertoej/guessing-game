
const getUserNumber = function(){
    console.log(this)

    this.buttonElement = document.getElementById("checkButton")
    this.guessInput = document.getElementById("guess")
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
}



export default getUserNumber;