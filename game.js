var interval = 0;

function startRace() {
	var raceTimer = setInterval(100);
	var raceActive = true;
	console.log('Starting Race!');
	loop();
}

/*function loop() {
	interval = setInterval(horse1, 10);
}

function horse1() {
	var horse1 = document.getElementById('horse1');
	var positionTop = horse1.offestTop;
	var positionLeft = horse1.offsetLeft;
	if (positionLeft >= window.innerWidth * 0.85){

	} else {
		horse1.style.left = positionLeft + 1 + 'px';
	}
}*/

// Non-repeated horse moving (all four horses), however speeds are not randomised
function loop() {
	interval = setInterval(moveHorse, 2);
}

function moveHorse() {
	var horse = document.getElementsByClassName('horse');
	var positionTop = horse1.offsetTop;
	var positionLeft = horse1.offsetLeft;
	for (var num = 0; num < horse.length; num++) {
		if (positionLeft >= window.innerWidth * 0.2 && positionLeft <= window.innerWidth * 0.85 - 50 - (num*window.innerWidth*0.02) && positionTop <= window.innerHeight * 0.25 - 50 - (num*window.innerHeight * 0.04) && positionTop >= window.innerHeight * 0.05 - 50 - (num*window.innerHeight * 0.04)) {
			horse[num].style.left = positionLeft + 1 + 'px';
			console.log("MoveRight");
		}
		if (positionLeft >= window.innerWidth * 0.85 - 50 - (num*window.innerWidth*0.02) && positionLeft <= window.innerWidth * 0.95 - 50 - (num*window.innerWidth*0.02) && positionTop <= window.innerHeight * 0.85 - 50 - (num*window.innerHeight * 0.04) && positionTop >= window.innerHeight * 0.05 - 50 - (num*window.innerHeight * 0.04)) {
			horse[num].style.top = positionTop + 1 + 'px';
			console.log("MoveDown");
		}
		if (positionLeft >= window.innerWidth * 0.1 - 50 - (num*window.innerWidth*0.02) && positionLeft <= window.innerWidth * 0.95 - 50 - (num*window.innerWidth*0.02) && positionTop <= window.innerHeight * 0.98 - 50 - (num*window.innerHeight * 0.04) && positionTop >= window.innerHeight * 0.85 - 50 - (num*window.innerHeight * 0.04)) {
			horse[num].style.left = positionLeft - 1 + 'px';
			console.log("MoveLeft");
		}
		if (positionLeft >= window.innerWidth * 0.1 - 50 - (num*window.innerWidth*0.02) && positionLeft <= window.innerWidth * 0.15 - 50 - (num*window.innerWidth*0.02) && positionTop <= window.innerHeight * 0.98 - 50 - (num*window.innerHeight * 0.04) && positionTop >= window.innerHeight * 0.2 - 50 - (num*window.innerHeight * 0.04)) {
			horse[num].style.top = positionTop - 1 + 'px';
			console.log("MoveUp");
		}
	}
}

function myLoadFunction() {
	var startButton = document.getElementById('start');
	startButton.addEventListener('click', startRace);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
