var wins = 0;
var losses = 0;
var lives = 9;
var random = ["a","b","c","d","e"]




var compGuess = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

document.onkeyup = function(){
	var userGuess = event.key.toLowerCase();
	var html =
"<p>Your guesses so far: </p>" +
"<p>Wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>Lives: " + lives + "</p>";
	console.log(userGuess);

	if (userGuess===compGuess){
		wins++;
	document.getElementById("html").innerHTML = html;

	}

};


