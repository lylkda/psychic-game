//Global Variables
var statsDiv = document.getElementById("guesses");

//Define functions
function reset(){
	wins = 0;
	losses = 0;
	lives = 9;
}

function resetLetter(){
	compGuess = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	statsDiv = document.getElementById("guesses").innerHTML = 'Your guesses: ';
	printStats();
}

function addGuess(){
	var newSpan = document.createElement("span");
	newSpan.innerHTML = userGuess + ", ";
	guesses.appendChild(newSpan);

}

function printStats(){
	document.getElementById("stats").innerHTML =  
	"<p> Wins: " + wins + "</p>" +
	"<p> Losses: " + losses +"</p>" +
	"<p> Guesses Left: " + lives + "</p>";
}

function start(){
	reset();
	resetLetter();
}



//The scoring system
document.onkeyup = function guess(){
	userGuess = event.key.toLowerCase();


	if (userGuess === compGuess){
		wins++;
		lives=9;
		resetLetter();
	}
	else{
		lives--;
		addGuess();
		printStats();
	}

	if (lives === 0){
		losses++;
		lives = 9;
		resetLetter();
	}

	if (wins === 5){
		var yay = confirm ("Good job! Play again?");
	}

	if (losses ===3){
		var playAgain = confirm("WOW YOU'RE BAD! Play again?");
	}

	if (playAgain || yay) {
		start();
	}


}

//Call on Functions to Start Game
start();