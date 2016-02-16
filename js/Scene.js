var Scene = function (data) {
	this.game = data.game;
	this.sceneData = data.sceneData;
	this.mapData = data.mapData;
	this.init();
};

Scene.prototype.clearAllGraphics = function() {
	for (var i in this.contextLayers) {
		var ctx = this.contextLayers[i];
		if (ctx && ctx.clearRect) {
			ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
		}
	}
	// this.needToRedrawMap = true;
	this.needToRedrawEvents = true;
};

Scene.prototype.clearGraphicsOfLayer = function(id) {
	if (id >= 0 && id < this.contextLayers.length) {
		var ctx = this.contextLayers[id];
		ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
		if (id < 3) {
			// this.needToRedrawMap = true;
		}
		else {
			this.needToRedrawEvents = true;
		}
	}
};

Scene.prototype.getContextLayers = function () {
	return this.contextLayers;
};

Scene.prototype.getCanvasSize = function () {
	return this.canvasSize;
};

Scene.prototype.init = function () {
	this.canvasSize = this.game.getCanvasSize();
	this.canvasLayers = this.game.getCanvasLayers();
	this.contextLayers = this.game.getContextLayers();
	this.map = new Map({ mapData: this.mapData });
	this.mapEvents = [];
	this.mapHero = new MapEvent({
		map: this.map,
		x: 5,
		y: 8,
		direction: DATA_DIRECTION.DOWN,
		name: DATA_HEROES.hero1.name,
		character: DATA_HEROES.hero1.character,
		speed: 7,
		rate: 2,
		moveable: true,
		visible: true,
		collidable: true
	});
	this.inputManager = new InputManager({
		type: 'keyboard',
		fps: 30,
		player: this.mapHero,
		DOMElement: document.getElementsByTagName('body')[0],
	});
	this.needToRedrawMap = true;
	this.needToRedrawEvents = true;
	this.drawMap();;
};

Scene.prototype.update = function () {
	this.inputManager.update();
	this.draw();
};

Scene.prototype.draw = function() {
	// if (this.needToRedrawMap) {
		this.drawMap();
	// }
	this.clearGraphicsOfLayer(3);
	// if (this.needToRedrawEvents) {
		this.drawEvents();
	// }
};

// Scene.prototype.drawMap = function() {
	// var maps = this.map.getMaps();
	// for (var m in maps) {
		// var currentMap = this.map.getMapById(m);
		// for (var i = 0; i < this.map.getCol(); i++) {
			// for (var j = 0; j < this.map.getRow(); j++) {
				// var x = i * 32;
				// var y = j * 32;
				// var s = 32;
				// if (this.contextLayers.length > 0 && this.contextLayers[0]) {
					// var value = currentMap[j][i];
					// if (value >= 0) {
						// var coord = this.map.getTileById(value);
						// this.contextLayers[m].drawImage(this.map.getTileset(), coord.y * s, coord.x * s, s, s, x, y, s, s);
					// }
				// }
			// }
		// }
	// }
	// if (window.location.origin !== "file://") {
		// this.redrawShadows();
	// }
// };

Scene.prototype.drawMap = function() {
	var heroCoord = this.mapHero.getTileNext();
	var tileset = this.map.getTileset();
	var maps = this.map.getMaps();
	for (var i = 0; i < this.map.getCol(); i++) {
		for (var j = 0; j < this.map.getRow(); j++) {
			var x = i * 32;
			var y = j * 32;
			var s = 32;
			var tiles = [];
			for (var m in maps) {
				var currentMap = this.map.getMapById(m);
				var value = currentMap[j][i];
				tiles.push([this.map.mapData.overlayers[value], value, m]);
			}
			tiles.sort();
			for (var t in tiles) {
				var tile = tiles[t];
				var overlay = tile[0];
				var value = tile[1];
				var ctx = this.contextLayers[tile[2]];
				if (value >= 0) {
					var tileCoordOnTileset = this.map.getTileById(value);
					if (i == heroCoord.x && j == heroCoord.y && overlay > 2) {
						aff('overlay');
						this.drawEvents(ctx);
					}
					ctx.drawImage(tileset, tileCoordOnTileset.y * s, tileCoordOnTileset.x * s, s, s, x, y, s, s);
				}
			}
		}
	}
	
	if (window.location.origin !== "file://") {
		this.redrawShadows();
	}
};

Scene.prototype.drawEvents = function() {
	// this.contextLayers[3].globalAlpha = 0.5;
	this.mapHero.draw(this.contextLayers[0]);
	// this.needToRedrawEvents = false;
	// this.contextLayers[3].globalAlpha = 1;
};

Scene.prototype.redrawShadows = function() {
	for (var i in this.contextLayers) {
		if (i > 0) {
			var ctx = this.contextLayers[i];
			img = ctx.getImageData(0, 0, 640, 480);
			var len = 640 * 480 * 4;
			for (var i = 0; i < len; i += 4) {
				if ((img.data[i] == 177 || img.data[i] == 176) &&
					(img.data[i+1] == 173 || img.data[i+1] == 172) &&
					(img.data[i+2] == 185 || img.data[i+2] == 184)) {
					img.data[i + 3] = 128;
				}
			}
			ctx.putImageData(img, 0, 0);
		}
	}
};




