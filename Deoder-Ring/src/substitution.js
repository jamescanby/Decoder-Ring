// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split('');
  function alphabetHelper(letter, incomingAlphabet, encode) {
      const foundPos = encode ? alphabetArray.indexOf(letter) : incomingAlphabet.indexOf(letter);
      return encode ? incomingAlphabet[foundPos] : alphabetArray[foundPos];
  } 
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //If there is no alphabet return false
    if (!alphabet) {
      return false
    }
    //take our alphabet and split it into an array
    const incomingAlphabet = alphabet.split('')
    //Get unique list in alphabet
    const uniqueAlphabet = [...new Set(incomingAlphabet)]
    //Make sure there is 26 characters
    if(uniqueAlphabet.length < 26) {
      return false;
    }
    //convert the input to lowercase
    //split input and lowercase
    input = input.toLowerCase().split("");
    //create a new array to hold the info
    const newString = input.map((singleCharacter) => {
      //if the input is a space ignore it
      if (singleCharacter === " ") {
        return singleCharacter;
      }    
      //build the final array
      return alphabetHelper(singleCharacter, incomingAlphabet, encode);
    });
    //return the new array  
    return newString.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
