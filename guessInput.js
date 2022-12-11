
const getUserNumber = function(){
    console.log(this)

    
    this.elements.button.onclick = () => {
        let guessedNumber = this.elements.guessInput.value
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