var DATA_MAP = {
	map01: {
		name: 'map01',
		tileset: 'Graphics/Tilesets/tileset01.png',
		maps: [
			[
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			],
			[
				[1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,16,17,17,18,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,24,25,25,26,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,32,33,33,34,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,40,41,42,43,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,48,49,50,51,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,56,57,58,59,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,64,65,66,67,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,72,73,74,75,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
			],
			[
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,104,105,106,107,108,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,112,113,114,115,116,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,120,121,122,123,124,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,128,129,130,131,132,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,136,137,138,139,140,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
			]			
		],
		practabilities: [ // 0 KO, 1 OK
			1,1,1,1,0,1,0,0,
			1,1,1,1,0,1,0,0,
			1,1,1,1,1,1,0,0,
			1,1,1,1,1,0,0,0,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,
			1,0,0,1,1,0,0,1,
			0,0,0,0,0,0,1,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			1,1,1,1,1,0,0,1,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,1,1,1,
			0,0,1,0,0,1,1,1
		],
		overlayers: [
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			5,5,5,5,5,5,5,5,
			4,4,4,4,4,4,4,4,
			3,3,3,3,3,3,3,3,
			2,2,2,2,2,2,2,2,
			0,0,0,0,0,0,0,0,
			1,1,1,1,1,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,1,1,1,0,0,0,
			2,2,2,2,2,0,0,0,
			1,1,1,1,1,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0
			
		]
	}
};

var DATA_HEROES = {
	hero1: {
		name: 'Arshes',
		className: 'Fighter',
		character: 'Graphics/Characters/Arshes_normal.png'
	}
};

var DATA_DIRECTION = {
	"DOWN"	: 0,
	"LEFT"		: 1,
	"RIGHT"	: 2,
	"UP"		: 3
};

var DATA_TILE_SIZE = 32;

var DATA_KEYBOARD = {
	A : 65,
	B : 66,
	C : 67,
	D : 68,
	E : 69,
	F : 70,
	G : 71,
	H : 72,
	I : 73,
	J : 74,
	K : 75,
	L : 76,
	M : 77,
	N : 78,
	O : 79,
	P : 80,
	Q : 81,
	R : 82,
	S : 83,
	T : 84,
	U : 85,
	V : 86,
	W : 87,
	X : 88,
	Y : 89,
	Z : 90,
	
	a : 97,
	b : 98,
	c : 99,
	d : 100,
	e : 101,
	f : 102,
	g : 103,
	h : 104,
	i : 105,
	j : 106,
	k : 107,
	l : 108,
	m : 109,
	n : 110,
	o : 111,
	p : 112,
	q : 113,
	r : 114,
	s : 115,
	t : 116,
	u : 117,
	v : 118,
	w : 119,
	x : 120,
	y : 121,
	z : 122,
	
	SPACE : 32,
	ENTER : 13,
	DELETE : 8,
	ESCAPE : 27,
	PN0 : 96,
	PN1 : 97,
	PN2 : 98,
	PN3 : 99,
	PN4 : 100,
	PN5 : 101,
	PN6 : 102,
	PN7 : 103,
	PN8 : 104,
	PN9 : 105,
	UP : 38,
	DOWN : 40,
	LEFT : 37,
	RIGHT : 39,
	SHIFT : 16
	
};

var DATA_COMMANDS = {
	UP : DATA_KEYBOARD.UP,
	DOWN : DATA_KEYBOARD.DOWN,
	LEFT : DATA_KEYBOARD.LEFT,
	RIGHT : DATA_KEYBOARD.RIGHT
	// CONFIRM : DATA_KEYBOARD.ENTER,
	// BACK : DATA_KEYBOARD.DELETE,
	// QUIT : DATA_KEYBOARD.ESCAPE
};