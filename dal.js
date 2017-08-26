const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
let mysteryWord = words[Math.floor(Math.random() * words.length)];
let incorrectArr = [];
console.log("mysteryWord", mysteryWord);

let guesses = 8;
let word = makeDashes();


function makeDashes(){
  let displayArr = [];
  for(let i = 0; i < mysteryWord.length; i++){
    displayArr.push("_")
  }
  return displayArr;
}

function getWord(){
  return word;
}
function getGuesses(){
  return guesses;
}

// function addGuess(item) {
//   guessArr.push(item);
//   console.log("addGuess", guessArr);
// }

function addGuess(guessedLetter){
  let isCorrect = false;
  for (var i = 0; i<mysteryWord.length; i++){
    if(mysteryWord[i] === guessedLetter){
      console.log("success!");
      word[i] = guessedLetter;
      isCorrect = true;
    }
  }
  if(isCorrect === false){
    incorrectArr.push(guessedLetter)
    console.log("incorrectArr", incorrectArr);
    guesses -= 1;
    console.log("guesses", guesses);
  }
}


module.exports = {
  mysteryWord: mysteryWord,
  getWord: getWord,
  getGuesses: getGuesses,
  incorrectArr: incorrectArr,
  makeDashes: makeDashes,
  addGuess: addGuess,
}













// word = 'Hello'
// displayArr = ['_', '_', '_', "_", "_"]
// let guesses = 8
// let isCorrect = false
// for (var i = 0; i < word.length; i++) {
//   if(word[i] === guessedLetter) {
//     displayArr[i] = guessedLetter
//     isCorrect = true
//   }
// }
// if(isCorrect === false){
//   incorrectArr.push(guessedLetter)
//   guesses -= 1
// }
// //have we already guessed the letter?
// if((displayArr.indexOf(guessedLetter) !== -1) &&
//    (incorrectArr.indexOf(guessedLetter) !== -1)) {
//      //run all code
//    }
//   // if(displayArr.join('') === word)
// if(guessArr.indexOf(guessedLetter) !== -1){
//   //run all code
// }
// function checkForLetter() {
//   for (let i = 0; i < displayArr.length; i++) {
//     let mysteryLetter = displayArr[i].id;
//     for (let j = 0; j < guessArr.length; j++) {
//       let guessedLetter = guessArr[j];
//       // console.log("guessedLetter", guessedLetter);
//       if (guessedLetter === mysteryLetter) {
//         displayArr[i].display = guessedLetter
        // console.log("guessedLetter in if loop", guessedLetter);
        // console.log("placeholder in if loop", placeholder);
        // console.log("displayArr from loop", displayArr);
//       }
//     }
//   }
// }
//
// function incorrectGuesses(){
//
//
// }
