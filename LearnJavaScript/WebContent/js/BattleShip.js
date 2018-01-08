/**
 * 
 */

//Ship 위치 저장 변수
var location1 = 3;
var location2 = 4;
var location3 = 5;

//Recoding용 변수
var guessValue = 0;
var hit = 0;

//기타 변수
var isSink = false;


function shoot(){
	guessValue = prompt("예상되는 전함의 좌표를 입력하세요 (1~6)");
}

function isHit(){
	if((guessValue == location1) || (guessValue == location2) || (guessValue == location3)){
		alert("명중!!!");
	} else {
		alert("다음 기회에...");
	}
}

shoot();
isHit();