var timer = document.getElementById('myStopwatchTimer');
var seconds = 0;
var minutes = 0;
var hours = 0;
var myTimeout;

function startWatch() {
	seconds = parseInt(seconds);
	minutes = parseInt(minutes);
	hours = parseInt(hours);
	seconds += 1;

	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	if (seconds == 60) {
		seconds = '00';
		minutes += 1;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	if (minutes == 60) {
		seconds = '00';
		minutes = '00';
		hours += 1;
	}

	if (hours < 10) {
		hours = '0' + hours;
	}

	timer.innerHTML = hours + ':' + minutes + ':' + seconds;
	myTimeout = setTimeout(startWatch, 1000);
	document.getElementById('startButtonID').style.pointerEvents = 'none';
}

function stopWatch() {
	document.getElementById('startButtonID').style.pointerEvents = 'all';
	clearTimeout(myTimeout);
}

function resetWatch() {
	document.getElementById('startButtonID').style.pointerEvents = 'all';
	clearTimeout(myTimeout);
	seconds = 0;
	minutes = 0;
	hours = 0;
	timer.innerHTML = '00' + ':' + '00' + ':' + '00';
}