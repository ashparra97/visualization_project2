/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/
if (screenfull.isEnabled) {
	screenfull.request();
}
document.fullscreenEnabled =
	document.fullscreenEnabled ||
	document.mozFullScreenEnabled ||
	document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}



const element = document.getElementById('target');

document.getElementById('button').addEventListener('click', () => {
	if (screenfull.isEnabled) {
		screenfull.request(element);
	}
});


if (screenfull.isEnabled) {
	screenfull.on('change', () => {
		console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
	});
}

screenfull.off('change', callback);

<button toggleFullscreen>Toggle fullscreen<button>


