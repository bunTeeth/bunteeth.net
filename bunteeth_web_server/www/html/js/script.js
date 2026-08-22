// PUT JAVASCRIPT HERE !!!!!!!!!!!!!!!!!!
var botPick= 0
var playerPick = "String"

function myButton(text) {
	alert(text)
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buttonTest() {
	if (playerPick != "String") {
		botPick = getRandomNumber(1,3);
		if (botPick == 1) {
			document.getElementById('botSpace').innerHTML = "Rock";
		} else if (botPick == 2) {
			document.getElementById('botSpace').innerHTML = "Paper";
		} else {
			document.getElementById('botSpace').innerHTML = "Scissors";
		}
		return gameResults();
	} else {
		return gameResults();
	}
}

function pickRock() {
	document.getElementById('botSpace').innerHTML = "";
	document.getElementById('resultSpace').innerHTML = "";
	return playerPick = "You picked Rock !";
}

function pickPaper() {
	document.getElementById('botSpace').innerHTML = "";
	document.getElementById('resultSpace').innerHTML = "";
	return playerPick = "You picked Paper !";
}

function pickScissors() {
	document.getElementById('botSpace').innerHTML = "";
	document.getElementById('resultSpace').innerHTML = "";
	return playerPick = "You picked Scissors !";
}

function gameResults() {
	if (botPick == 1 && playerPick == "You picked Paper !") {
		document.getElementById('resultSpace').innerHTML = "YOU WIN";
		playerPick = "String";
	} else if (botPick == 2  && playerPick == "You picked Scissors !") {
		document.getElementById('resultSpace').innerHTML = "YOU WIN";
		playerPick = "String";
	} else if (botPick== 3 && playerPick == "You picked Rock !") {
		document.getElementById('resultSpace').innerHTML = "YOU WIN";
		playerPick = "String";
	} else if (playerPick == "String") {
		document.getElementById('resultSpace').innerHTML = "ok like at least pick something >:l";
		document.getElementById('botSpace').innerHTML = "";
		document.getElementById('playerSpace').innerHTML = "";
		// document.getElementById('resultSpace').style.color = "red";
	} else {
		playerPick = "String";
		return 	document.getElementById('resultSpace').innerHTML = "Awwww u lose :c";
	}
}

function refresh() {
	playerPick = "String";
	window.location.reload();
}