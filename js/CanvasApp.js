function CanvasApp(data) {
	if (typeof data == 'undefined') {
		this.error('constructor', 'undefined data parameter');
	}
	if (typeof data.container == 'undefined') {
		this.error('constructor', 'undefined data.container parameter');
	}
	if (typeof data.canvas == 'undefined') {
		this.error('constructor', 'undefined data.canvas parameter');
	}
	var container = $('#' + data.container);
	var nbrOfCanvas = data.canvas;
	this.canvasLayers = [];
	for (var i = 0; i < nbrOfCanvas; i++) {
		var canvas = $("<canvas " + 
		"width = '640' height = '480' " + 
		"onContextMenu = 'return false;'>" + 
		"<!-- Message affiché si canvas n'est pas supporté par le navigateur " + 
		"-->Votre navigateur ne gère pas les canvas.Changez-le ou mettez-le à jour.</canvas>");
		container.append(canvas);
	}
	this.canvasLayers = document.getElementsByTagName('canvas');
	this.init();
};

CanvasApp.prototype.error = function(src, msg) {
	console.info('App.error : ' + src + ' -> ' + msg);
};

CanvasApp.prototype.init = function() {
	this.contextLayers = [];
	for (var i in this.canvasLayers) {
		var currentCanvasLayer = this.canvasLayers[i];
		if (currentCanvasLayer && currentCanvasLayer.getContext) {
			var ctx = currentCanvasLayer.getContext('2d');
			this.contextLayers.push(ctx);
		}
	}
	this.game = null;
	this.initGame();
};

CanvasApp.prototype.initGame = function() {
	this.game = new Game(this, this.canvasLayers, this.contextLayers, 60);
};

