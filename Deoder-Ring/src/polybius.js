// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
 //define a variable and set the alphabet to the variable
 const alphabet = "abcdefghijklmnopqrstuvwxyz";
 //define a variable and split the alphabet inside new variable
 const alphabetArray = alphabet.split("");
  //declare an empty array
 let grid = [];
function populateGrid() {
  //declare an empty array
  const returnGrid = [];
  let row = 1;
  let col = 1;
  //loop through the alphebetArray
  for (let i = 0; i < alphabetArray.length; i++) {
    returnGrid.push({ character: alphabetArray[i], x: row.toString(), y: col.toString() });
    if (alphabetArray[i] === "i") {
      i++;
      returnGrid.push({ character: alphabetArray[i], x: row.toString(), y: col.toString() });
      col++;
      continue;
    }
    if (col === 5) {
      row++;
      col = 1;
      continue;
    }
    col++;
  }
  grid = returnGrid;
}
//create a encode character function
function encodeCharacter(character) {
  const foundChar = grid.find((singleObj) => singleObj.character === character);
  return `${foundChar.y}${foundChar.x}`;
}
//create a decode caracter function
function decodeCharacter(encodedCharacter) {
  const foundChar = grid.filter((obj) => obj.x === encodedCharacter[1] && obj.y === encodedCharacter[0]);
  //use map method
  const foundLetters = foundChar.map(character => character.character);
  return foundLetters.join('');
}
function isEven(string) {
  return string.length % 2 == 0;
}
//create a test function
function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
}
function polybius(input, encode = true) {
  populateGrid();
  //make the input lower case
  input = input.toLowerCase();
  const newString = [];
  if (encode) {
    input = input.toLowerCase().split("");
    //loop through and encode the characters
    input.map((singleCharacter) => {
      if (singleCharacter === " " || !isCharacterALetter(singleCharacter)) {
        newString.push(singleCharacter);
        return;
      }
      newString.push(encodeCharacter(singleCharacter));
    });
    return newString.join('');
  } else {
    const noSpaces = input.split(" ").join("");
    if (!isEven(noSpaces)) {
      return false;
    }
    //break up the string by spaces
    const bigPieces = input.split(" ");
    const unCombinedWords = [];
    bigPieces.forEach((piece) => {
      const splitPiece = piece.split("");
      const doubledPiece = splitPiece.reduce((result,value,index,array) => {
        if (index % 2 === 0) result.push(array.slice(index, index + 2));
        return result;
      }, []);
      const decodedPieces = [];
      doubledPiece.forEach((group) => {
        decodedPieces.push(decodeCharacter(group));
      });      
      unCombinedWords.push(decodedPieces.join(''));
    });
    return unCombinedWords.join(' ');
  }
}
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
