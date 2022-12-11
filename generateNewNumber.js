const generateNewSecret = function(min, max){
   let newNumber = 0;
   do {
       newNumber = Math.floor(Math.random() * (max + 1 - min)  + min);
   } while (this.config.numberIsUnique && newNumber == this.secret);
   this.number = newNumber;
   return this;
}

export default generateNewSecret;