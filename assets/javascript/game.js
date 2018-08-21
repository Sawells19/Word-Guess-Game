var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0;
var word = "";
var wins = 0;
var losses = 0;
var lettersRemaining = 0;
var guessesRemaining = 0;
var guessedLetters = [];

var phrases = ["test1", "holy", "thundestruck"];

function phrase(){
    rand = Math.floor(Math.random()*phrases.length);
    word = phrases[rand];
    wordGuess();  
}

