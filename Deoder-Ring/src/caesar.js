// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function getChar(character, shift, encode){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetPieces = alphabet.split('');
    const foundIndex = alphabetPieces.indexOf(character);  
    let position = 0;
    if (encode){
        if (shift > 0) {
            position = foundIndex + shift >= alphabetPieces.length ? foundIndex + shift - alphabetPieces.length : foundIndex + shift;
        }else{
            position = foundIndex + shift < 0 ? alphabetPieces.length + (foundIndex + shift) : foundIndex + shift;
        }
    } else {
        if (shift > 0) {
            position = foundIndex - shift < 0 ? alphabetPieces.length + (foundIndex - shift) : foundIndex - shift;
        }else{
            position = foundIndex - shift >= alphabetPieces.length ? (foundIndex - shift) - alphabetPieces.length : foundIndex - shift;
        }
    }
    return alphabetPieces[position]
  }
  //create a function using test method
  function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }
  function caesar(input, shift, encode = true) {
    if (!shift || shift == 0 || shift < -25 || shift > 25){
      return false;
    }
    //set input to lower case and split
    input = input.toLowerCase().split('');
    const newString = [];
    input.forEach(singleCharacter => {
      if (!isCharacterALetter(singleCharacter)){
        newString.push(singleCharacter);
        return;
      }
      newString.push(getChar(singleCharacter, shift, encode));
    })  
    return newString.join('');
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
