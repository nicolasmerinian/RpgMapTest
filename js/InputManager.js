function InputManager(data) {
	this.type = data.type;
	this.timerFPS = 1000 / data.fps;
	this.player = data.player;
	this.DOMElement = data.DOMElement;
	this.init();
};

InputManager.prototype.init = function() {
	this.leftKey = false;
	this.rightKey = false;
	this.upKey = false;
	this.downKey = false;
	this.DOMElement.inputManager = this;
	this.DOMElement.addEventListener('keydown', this.keyDownHandler, false);
	this.DOMElement.addEventListener('keyup', this.keyUpHandler, false);
};

InputManager.prototype.update = function() {
	if (this.downKey) {
		this.player.move(DATA_DIRECTION.DOWN);
	}
	if (this.leftKey) {
		this.player.move(DATA_DIRECTION.LEFT);
	}
	if (this.rightKey) {
		this.player.move(DATA_DIRECTION.RIGHT);
	}
	if (this.upKey) {
		this.player.move(DATA_DIRECTION.UP);
	}
};

InputManager.prototype.keyDownHandler = function(event) {
	switch (event.keyCode) {
		case DATA_COMMANDS.DOWN:
			this.inputManager.downKey = true;
			break;
		case DATA_COMMANDS.LEFT:
			this.inputManager.leftKey = true;
			break;
		case DATA_COMMANDS.RIGHT:
			this.inputManager.rightKey = true;
			break;
		case DATA_COMMANDS.UP:
			this.inputManager.upKey = true;
			break;
	}				
};

InputManager.prototype.keyUpHandler =function(event) {
	switch (event.keyCode) {
		case DATA_COMMANDS.DOWN:
			this.inputManager.downKey = false;
			break;
		case DATA_COMMANDS.LEFT:
			this.inputManager.leftKey = false;
			break;
		case DATA_COMMANDS.RIGHT:
			this.inputManager.rightKey = false;
			break;
		case DATA_COMMANDS.UP:
			this.inputManager.upKey = false;
			break;
	}	
};








