function Game(canvasApp, canvasLayers, contextLayers, interval) {
	this.canvasApp = canvasApp;
	this.canvasLayers = canvasLayers;
	this.contextLayers = contextLayers;
	this.interval = interval;
	this.init();
};

Game.prototype.getCanvasLayers = function() {
	return this.canvasLayers;
};

Game.prototype.getContextLayers = function() {
	return this.contextLayers;
};

Game.prototype.getCanvasSize = function() {
	return {
		width : this.canvasLayers[0].width,
		height : this.canvasLayers[0].height
	};
};

Game.prototype.getScene = function() {
	return this.scene;
};

Game.prototype.init = function() {
	var sceneData = null;
	var mapData = DATA_MAP.map01;
	this.scene = new Scene({ game: this, sceneData: sceneData, mapData: mapData });
	// this.lastRender = new Date();
	
	// (function() {
		// var lastTime = 0;
		// var vendors = ['ms', 'moz', 'webkit', 'o'];
		// for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			// window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			// window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
			// || window[vendors[x]+'CancelRequestAnimationFrame'];
		// }
	 
		// if (!window.requestAnimationFrame)
			// window.requestAnimationFrame = function(callback, element) {
				// var currTime = new Date().getTime();
				// var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				// var id = window.setTimeout(function() { callback(currTime + timeToCall); },
				  // timeToCall);
				// lastTime = currTime + timeToCall;
				// return id;
			// };
	 
		// if (!window.cancelAnimationFrame)
			// window.cancelAnimationFrame = function(id) {
				// clearTimeout(id);
			// };
	// }());
	
	
	this.run();
};

// Game.prototype.initControlManager = function(type, element, timerKey, player) {
	// aff('Game.initControlManager');
	// this.controlManager = new ControlManager(type, element, timerKey, player);
	// aff(this.controlManager);
// };

Game.prototype.run = function() {
	this.stop();
	this.update();
};

Game.prototype.update = function() {
	if (!this.scene || !this.scene.update) {
		this.canvasApp.error('Game.runScene', 'undefined scene or scene\'s update method.');
	}
	var delta = new Date() - this.lastRender;
	this.scene.update();
	
	var self = this;
	// window.requestAnimationFrame(function() {
		// self.update();
	// });
	this.timer = setTimeout(
		function() {
			self.update();
		}, 
	self.interval);
};

Game.prototype.stop = function() {
	// aff('Game.stop');
	clearTimeout(this.timer);
};

Game.prototype.reset = function() {
	this.stop();
	// this.scene = null;
	this.init();
};



