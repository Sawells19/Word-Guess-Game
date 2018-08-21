var numWrong = 0;
var numRight = 0;
var phraseLength = 0;
var numChar = 0;
var word = "";
var wins = 0;
var losses = 0;
var lettersRemaining = 0;
var guessesRemaining = 0;

var phrases = ["test1", "holy", "thundestruck"];

function phrase(){
    rand = Math.floor(Math.random()*phrases.length);
    word = phrases[rand];
    wordGuess();  
}

function wordGuess (){
    var y = x-1;
    var spaces = 0;
    var validChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "?", "!", ",", ".", "-", "'"]
    for (q = 0; q <word.length; q++){
        var letter = word.substring(y,x);
        if(validChar.indexOf(letter) > -1){
            x--;
            y--;
        }
        else {
            alert("We're not that fancy here.");
        }
    }
    x = word.length;
    y = x-1;
    while (x > 0) {
        numChar++;
        var letter = word.substring (y,x);
        if (letter === ""){
            document.getElementById("letter" + x).innerHTML = "&nbsp;";
            document.getElementById("letter" + x ).style.visibility = "hidden";
            document.getElementById("letter" + x).style.display = "block";
            document.getElementById("underline" + x).style.display - "block";
            spaces++;
        }
        else if (letter === "?") || (letter === "!") || (letter === ".") || (letter === ",") || (letter === "=") || (letter === "'") {
            document.getElementById ("letter" + x).innerHTML = letter;
            document.getElementById ("letter" + x).style.display = "block";
            document.getElementById ("underline" + x).style.display = "block";
            spaces++;
        }
        else { 
            document.getElementById("letter" + x).innerHTML = letter;
            document.getElementById("letter" + x).style.visibility = "hidden";
            document.getElementById("underline" + x).style.display = "block";
            document.getElementById("underline" + x).style.borderBottom = "3 px solid black";
        }
       x--;
       y--;
    }
    phraseLength = word.length - spaces;
    centerWords();
}

function centerWords(){
    var placeKeep = 0;
    var countBack = 16;
    if(numChar > 15){
        while(countBack > 1){
            if(document.getElementById('letter16').innerHTML == "&nbsp;"){
                document.getElementById('underline16').style.width = "0px";
                document.getElementById('underline16').style.marginRight = "0px";
            }
            if(document.getElementById('letter'+countBack).innerHTML == "&nbsp;"){
                document.getElementById('underline'+countBack).style.width = (document.getElementById('underline1').offsetWidth)*(16-countBack)+"px";
                placeKeep = countBack;
                countBack = 0;
            }
            countBack--;
        }
    }
    for(x=0;x<8;x++){
        countBack = 15+placeKeep;
        if(numChar > countBack){
            while(countBack > 1){
                if(document.getElementById('letter'+countBack).innerHTML == "&nbsp;"){
                    document.getElementById('underline'+countBack).style.width = (document.getElementById('underline1').offsetWidth*((16+placeKeep)-countBack))+"px";
                    placeKeep = countBack;
                    countBack = 0;
                }
                countBack--;
            }
        }
    }
    
}

function guessLetter (){
    var correct = 0;
    var target = event.target || event.srcElement;
    target.style.visibility = "hidden";
    var lower = target.id;
    
}