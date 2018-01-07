/**
 * 
 */
var x = {
	name : 1
}
var y = null;
var z = "dd";
console.log (typeof x);
console.log (typeof y);
console.log (typeof z);

var planet = document.getElementById("body1");
console.log("planet" + planet);

function init (){
	var planet = document.getElementById("body");
	console.log (planet.innerHTML);
	planet.innerHTML = "적색 경보 : 박격포에 맞았습니다.";
	planet.setAttribute("class", "redtext");
}

 