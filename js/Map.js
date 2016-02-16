function Map(data) {
	if (typeof data == 'undefined') {
		throw new Error('Map.constructor: undefined data parameter');
	}
	if (typeof data.mapData == 'undefined') {
		throw new Error('Map.constructor: undefined data.mapData parameter');
	}
	this.mapData = data.mapData;
	this.init();
};

Map.prototype.init = function() {
	this.maps = this.mapData.maps;
	this.row = this.maps[0].length;
	if (this.row > 0) {
		this.col = this.maps[0][0].length;
	}
	this.width = this.col;
	this.height = this.row;
	this.tileset = new Image();
	this.tileset.onload = function() {};
	this.tileset.src = this.mapData.tileset;
};

Map.prototype.getMaps = function() {
	return this.maps;
};

Map.prototype.getMapById = function(id) {
	if (id < 0 || id >= this.maps.length) {
		return null;
	}
	return this.maps[id];
};

Map.prototype.getRow = function() {
	return this.row;
};

Map.prototype.getCol = function() {
	return this.col;
};

Map.prototype.getTilesetName = function() {
	return this.mapData.tileset;
};

Map.prototype.getTileset = function() {
	return this.tileset;
};

Map.prototype.getTileById = function(id) {
	var x = Math.floor(id / (this.tileset.width / 32));
	var y = id % (this.tileset.width / 32);
	return { x: x, y: y };
};

Map.prototype.getTileByCoord = function(row, col) {
	var frame = this.col * row + col;
};

Map.prototype.getTilesIdByMapCoord = function(coord) {
	var allLayersTilesIds = [];
	var m = this.maps;
	for (var i in m) {
		allLayersTilesIds.push(m[i][coord.y][coord.x]);
	}
	return allLayersTilesIds;
};

Map.prototype.getTileNextPractability = function(allLayersTilesIds) {
	var passable = true;
	for (var i in allLayersTilesIds) {
		var tileId = allLayersTilesIds[i];
		if (tileId >= 0 && this.mapData.practabilities[tileId] == 0) {
			passable = false;
		}
	}
	return passable;
};

Map.prototype.getTileNextOverlay = function(allLayersTilesIds) {
	var overlay = true;
	for (var i in allLayersTilesIds) {
		var tileId = allLayersTilesIds[i];
		if (tileId >= 0 && this.mapData.overlayers[tileId] == 0) {
			overlay = false;
		}
	}
	return overlay;
};












