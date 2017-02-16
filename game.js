var interval = 0;

function startRace() {
	var character = document.getElementById('character');
	var positionTop = character.offsetTop;
	console.log('Starting Race!');
	/*var positionLeft = character.offsetLeft;*/
	character.style.top = positionTop + 1 + 'px';
}

function myLoadFunction() {
	/*player = document.getElementById('player');

	var heads = document.getElementsByClassName('heads')[0].getElementsByTagName('li');
	for (var i = 0; i < heads.length; i++) {
		heads[i].addEventListener('click', setHead);
	}

	var bodies = document.getElementsByClassName('bodies')[0].getElementsByTagName('li');

	for (var i = 0; i < heads.length; i++) {
		bodies[i].addEventListener('click', setBody);
	}

	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);*/

	var startButton = document.getElementById('start');
	startButton.addEventListener('click', startRace);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);
