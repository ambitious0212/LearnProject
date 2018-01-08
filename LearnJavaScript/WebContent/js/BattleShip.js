/**
 * 
 */

var shipA = [ "16", "26", "36" ]

function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = fire;
}

function fire() {
	var guess = document.getElementById("guessInput");
	var inputLocation = guess.value;

	console.log("fire : " + inputLocation);
	//console.log(traslateCoordinate(inputLocation));
	var transCoordinate = traslateCoordinate(inputLocation);
	
	var location = document.getElementById(transCoordinate);
	if(shipA.indexOf(transCoordinate) != -1){
		console.log("fire : " + transCoordinate);
		location.setAttribute("class", "hit");
	} else {
		//location.setAttribute("class", "miss");
		location.setAttribute("class", "miss");
	}
}

function traslateCoordinate(inputCoordinate) {
	var coordinateY = inputCoordinate[0];
	var coordinateX = inputCoordinate[1];
 
	console.log("coordinateX : " + coordinateX);
	console.log("coordinateY : " + coordinateY);
	
	switch (coordinateY) {
	case "A":
		return "0" + coordinateX;
	case "B":
		return "1" + coordinateX;
	case "C":
		return "2" + coordinateX;
	case "D":
		return "3" + coordinateX;
	case "E":
		return "4" + coordinateX;
	case "F":
		return "5" + coordinateX;
	case "G":
		return "6" + coordinateX;
	default:
		console.log("traslateCoordinate : Input Value Error");
	}
}

window.onload = init;
