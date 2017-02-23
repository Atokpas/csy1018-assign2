var interval = 0;

function startRace() {
	var raceTimer = setInterval(100);
	var raceActive = true;
	console.log('Starting Race!');
	loop();
}

function loop() {
	interval = setInterval(horse1, 10);
}

function horse1() {
	var horse1 = document.getElementById('horse1');
	var positionTop = horse1.offestTop;
	var positionLeft = horse1.offsetLeft;
	if (positionLeft >= window.innerWidth * 0.85 - 50){

	} else {
		horse1.style.left = positionLeft + 1 + 'px';
	}
}

function myLoadFunction() {
	var startButton = document.getElementById('start');
	startButton.addEventListener('click', startRace);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
