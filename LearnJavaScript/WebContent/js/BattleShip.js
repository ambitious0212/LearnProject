/**
 * 
 */

var shipA = [ "16", "26", "36" ]



function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = fire;
	
	runUnitTest();
}

function runUnitTest(){
	/* For Unit Test */
	//view.displayMessage("표시");
	//view.displayHit("00");
	//view.displayMiss("66");
	model.fire("10");
	/* ************* */
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


var view = {
		displayMessage : function(msg){
			var messageConsole = document.getElementById("messageArea");
			console.log("[view.displayMessgae] message Console Object : " + messageConsole);
			
			messageConsole.innerHTML = msg;
		},
		
		displayHit : function(coordinate){
			var tempLocation = document.getElementById(coordinate);
			tempLocation.setAttribute("class","hit");
		},
		
		displayMiss : function(coordinate){
			var tempLocation = document.getElementById(coordinate);
			tempLocation.setAttribute("class","miss");
		}
};

var model = {
		boardSize : 6,
		numShips : 3,
		ships : [{locations: ["10", "20", "30"], hits : ["0", "0", "0"]},
				{locations: ["32", "33", "34"], hits : ["0", "0", "0"]},
				{locations: ["63", "64", "65"], hits : ["0", "0", "0"]}],
		shipLength : 3,
		shipsSunk : 0,
		fire : function(guessValue){
			for(var i=0; i<this.numShips; i++){
				var tempShip = this.ships[i];
				var locationOfShip = tempShip.locations;
				
				var index = locationOfShip.indexOf(guessValue);
				
				if(index >= 0){
					console.log("[model.fire] Hit!!");
					view.displayHit(guessValue);
					view.displayMessage("명중!!!");
				} else {
					console.log("[model.fire] Miss!!");
				}
			}
		}
}
