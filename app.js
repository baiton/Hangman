const express = require ('express');
const mustache = require('mustache-express');
const dal = require('./dal.js');
const bodyParser= require('body-parser')
const app = express();
const displayArr= require('./displayArr.js');
const guessArr= require('./guessArr.js');
console.log('guessArr', guessArr);



app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  dal.selectedWord();
  res.render("./main", {
    displayArr: displayArr,
    guessArr:guessArr
  });
})

app.post('/', function(req,res){
  // guessArr.push(req.body.id)
  const renderObject = {
    guessArr
  }
  dal.addGuess(req.body.id)
  // console.log('dal.addGuess(req.body.id', dal.addGuess(req.body.id));
  // dal.getGuess(req.body.id);
  res.redirect('/')
  // console.log("displayArr", displayArr);
  // console.log("displayArr Length", displayArr.length);
})



app.set('port', 3000);
app.listen(3000, function(){
  console.log('Application has started at 3000');
})
