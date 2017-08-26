// const session = require('express-session');
const express = require('express');
const mustache = require('mustache-express');
const dal = require('./dal.js');
const makeDashes = require('./dal.js').makeDashes
const bodyParser = require('body-parser')
const app = express();
// let displayArr = require('./displayArr.js');



app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));



app.get('/', function(req, res) {
  if (dal.getGuesses() === 0) {
    res.render("./loser");
  }  else if (dal.getGuesses() > 0) {
    res.render("./main", {
      makeDashes: dal.getWord(), //your displayed "_"
      incorrectArr: dal.incorrectArr,
      getGuesses: dal.getGuesses()
    });
  }
})

app.post('/', function(req, res) {
  let winningWord = dal.getWord();
  dal.addGuess(req.body.id)
  console.log("getWord", dal.getWord());
  if (winningWord.join('') === dal.mysteryWord) {
    res.render("./win");
  } else {
  res.redirect('/')
}
})



app.set('port', 3000);
app.listen(3000, function() {
  console.log('Application has started at 3000');
})
