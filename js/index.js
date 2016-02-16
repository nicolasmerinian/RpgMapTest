var app;

$(window).ready(function() {
	app = new CanvasApp({
		container: 'container',
		canvas: 4
	});
});

function aff(s) {
	console.info('Test : ' + s);
};