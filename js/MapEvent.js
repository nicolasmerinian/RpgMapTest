function MapEvent(data) {
	this.map = data.map;
	this.x = data.x;
	this.y = data.y;
	this.direction = data.direction;
	this.name = data.name;
	this.character = data.character;
	this.speed = data.speed;
	this.rate = data.rate;
	this.moveable = data.moveable;
	this.visible = data.visible;
	this.collidable = data.collidable;
	this.init();
};

MapEvent.prototype.init = function() {
	this.sprite = new Image();
	this.sprite.charRef = this;
	this.sprite.onload = function() {
		if (!this.complete) {
			throw "Erreur de chargement du sprite nommé \"" + url + "\".";
		}
		this.charRef.width = this.width / 4;
		this.charRef.height = this.height / 4;
	}
	this.sprite.src = this.character;
	this.frame = 0;
	this.animationState = -1;
};

MapEvent.prototype.draw = function(context) {
	this.frame = 0;
	var decalageX = 0;
	var decalageY = 0;
	if (this.animationState >= this.speed) {
		this.animationState = -1;
	} 
	else if (this.animationState >= 0) {
		this.frame = Math.floor(this.animationState / this.rate);
		if (this.frame > 3) {
			this.frame %= 4;
		}
		
		var pixelsAParcourir = 32 - (32 * (this.animationState / this.speed));
		
		if (this.direction == DATA_DIRECTION.DOWN) {
			decalageY = -pixelsAParcourir;
		}
		else if (this.direction == DATA_DIRECTION.LEFT) {
			decalageX = pixelsAParcourir;
		}
		else if (this.direction == DATA_DIRECTION.RIGHT) {
			decalageX = -pixelsAParcourir;
		}
		else if (this.direction == DATA_DIRECTION.UP) {
			decalageY = pixelsAParcourir;
		}
		
		this.animationState++;
	}

	// Drawing
	var img = this.sprite;
	var sx = this.frame * this.width;
	var sy = this.direction * this.height;
	var sw = this.width;
	var sh = this.height;
	var dx = this.x * DATA_TILE_SIZE - (this.width / 2) + (DATA_TILE_SIZE / 2) + decalageX;
	var dy = this.y * DATA_TILE_SIZE - this.height + (DATA_TILE_SIZE / 4 * 3) + decalageY;
	var dw =  this.width;
	var dh = this.height;
	context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
};

MapEvent.prototype.getTileNext = function(direction) {
	var coord = { 'x': this.x, 'y': this.y };
	switch (direction) {
		case DATA_DIRECTION.DOWN: 
			coord.y++;
			break;
		case DATA_DIRECTION.LEFT: 
			coord.x--;
			break;
		case DATA_DIRECTION.RIGHT: 
			coord.x++;
			break;
		case DATA_DIRECTION.UP: 
			coord.y--;
			break;
	}
	return coord;
};

MapEvent.prototype.move = function(direction) {
	if (this.animationState >= 0) {
		return false;
	}
	
	this.direction = direction;
	
	var nextTile = this.getTileNext(direction);
	if (nextTile.x < 0 || nextTile.y < 0 || nextTile.x >= this.map.width || nextTile.y >= this.map.height) {
		return false;
	}
	
	var nextTiles = this.getTilesIdByMapCoord(nextTile);
	if (!this.getTileNextPractability(nextTiles)) {
		return false;
	}
	
	this.animationState = 1;
	
	this.x = nextTile.x;
	this.y = nextTile.y;
	
	return true;	
};

MapEvent.prototype.getTileNextPractability = function(allLayersTilesIds) {
	var passable = true;
	for (var i in allLayersTilesIds) {
		var tileId = allLayersTilesIds[i];
		if (tileId >= 0 && this.map.mapData.practabilities[tileId] == 0) {
			passable = false;
		}
	}
	return passable;
};

MapEvent.prototype.getTilesIdByMapCoord = function(coord) {
	var allLayersTilesIds = [];
	var m = this.map.maps;
	for (var i in m) {
		allLayersTilesIds.push(m[i][coord.y][coord.x]);
	}
	return allLayersTilesIds;
};
















