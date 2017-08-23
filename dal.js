const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const displayArr= require('./displayArr.js');
const guessArr= require('./guessArr.js');
let mysteryWord = words[Math.floor(Math.random() * words.length)];
let mysteryWordArr=[...mysteryWord];
console.log("mysteryWord", mysteryWord);
console.log("mysteryWordArr", mysteryWordArr);
// console.log("displayArr", displayArr);



function addGuess(item){
  guessArr.push(item);
  console.log("addGuess", guessArr);
}

// function getGuess(){
//   return guessArr.filter(function(item){
//     return item;
//   })
// }

// function guessCount(){
//   return (displayArr.length +1)
//   console.log('guess count', displayArr.length +1)
// }

function selectedWord(){
  if (displayArr.length < mysteryWord.length){
  // console.log(mysteryWordArr);
  for(let i=0;i<mysteryWordArr.length; i++){
    let oneLetter = mysteryWordArr[i]
    let newLetter = {id: oneLetter, display: "_"}
    // console.log(typeof("oneLetter", oneLetter));
    // console.log("newLetter", newLetter);
    displayArr.push(newLetter);
    // console.log("displayArr", displayArr);
    }
  }
}
// console.log("selectedWord", selectedWord());

// function makeDashes(arr){
//   for(let i=0;i<arr.length; i++){
//
//   }
//   return dashedArr;
// }
// console.log("makeDashes", makeDashes(mysteryWord));

module.exports = {
  displayArr: displayArr,
  selectedWord: selectedWord,
  // getGuess: getGuess,
  addGuess: addGuess
}
