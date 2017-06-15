var pjs = new PointJS('2D', 900, 600, { // 16:9
	backgroundColor : '#53769A' // if need
});
// pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Object's manager
var math   = pjs.math;           // More Math-methods
var levels = pjs.levels;         // Levels manager

// var key   = pjs.keyControl.initKeyControl();
var mouse = pjs.mouseControl.initMouseControl();
// var touch = pjs.touchControl.initTouchControl();
// var act   = pjs.actionControl.initActionControl();

var width  = game.getWH().w; // width of scene viewport
var height = game.getWH().h; // height of scene viewport

pjs.system.setTitle('Spinner'); // Set Title for Tab or Window

// Game Loop
game.newLoopFromConstructor('Menu', function () {
	// Constructor Game Loop

	var Score = 0;
	
	var SAngel = 0;
	
	var SSpeed = 0;
	var sgn = 1;
	
	var xclick, yclick;
	
	var MSpin = game.newImageObject({
		file : 'spin1.png',
		w: 200, h: 200,
		x: 350, y: 200,
		
	});

	this.update = function () {
		// Update function

		game.clear(); // clear screen
		
		MSpin.draw();
		MSpin.setAngle(SAngel);
		if(SSpeed > 0)SSpeed -= 0.4;
		if(SSpeed < 0)SSpeed += 0.4;
		if(SSpeed < -1 || SSpeed > 1){Score += 0.2;
			SAngel -= SSpeed;
		}
		
		brush.drawText({
		  x : 10, y : 10,
		  text : 'Score: ' + Math.floor(Score),
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		/*brush.drawText({
		  x : 10, y : 10,
		  text : 'Angel: ' + Math.floor(SAngel),
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});*/
		
		brush.drawText({
		  x : 100, y : 100,
		  text : 'Speed: ' + Math.floor(SSpeed),
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		brush.drawText({
		  x : 100, y : 150,
		  text : 'x: ' + mouse.getPosition().x + 'y: ' + mouse.getPosition().y,
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		if (mouse.isDown('LEFT')) {
		  xclick = Math.floor(mouse.getPosition().x);
		  yclick = Math.floor(mouse.getPosition().y);
		}
		if (mouse.isUp('LEFT')) {
			if(xclick > mouse.getPosition().x || yclick > mouse.getPosition().y)sgn = -1;
			else sgn = 1;
			if((xclick != Math.floor(mouse.getPosition().x)) || (yclick != Math.floor(mouse.getPosition().y))){
				xclick += mouse.getPosition().x;
				yclick += mouse.getPosition().y;
				SSpeed += ((xclick + yclick)/100)*sgn;
			}
		}

	};

	this.entry = function () { // [optional]
	
	
	
	};

	 this.exit = function () { // [optional]
		
		
		
	 };

});

game.newLoopFromConstructor('Game', function () {
	// Constructor Game Loop

	var myText = game.newTextObject({
		positionC : point(game.getWH2().w, game.getWH2().h), // central position of text
		size : 50, // size text
		color : '#EAEAEA', // color text
		text : 'Hello, World!', // label
		alpha : 0, // alpha channel
		font : 'Arial' // font family
	});

	this.update = function () {
		// Update function

		game.clear(); // clear screen

		myText.draw(); // drawing text
		myText.transparent(0.005); // change alpha [0..>..1]

	};

	this.entry = function () { // [optional]
	
	
	
	};

	 this.exit = function () { // [optional]
		
		
		
	 };

});


game.startLoop('Menu');