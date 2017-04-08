var pjs = new PointJS('2D', 900, 600, { // 16:9
	backgroundColor : '#8A55EC' // if need
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

var width  = 900; // width of scene viewport
var height = 600; // height of scene viewport

pjs.system.setTitle('Naumova Click'); // Set Title for Tab or Window

var mas=60;
var mouse=1;

game.newLoopFromConstructor('myGame', function () {
	
	var naumova = game.newAnimationObject({
	  animation : pjs.tiles.newAnimation('pic/naumova_click.png', 256, 256, 3),
	  h: 300,
	  w : 300,
	  delay : 1,
	  y : 100, x : 250
	});
	
	var myCursor = game.newImageObject({
		x : 10, y : 10,
		h : 100,
		alpha : 1,
		file : 'pic/mouse_1.png',
		ondraw : function () {
		  this.moveTimeC(pjs.mouseControl.getPosition(), 5);
		}
	  });
	
	this.update = function () {
		
		game.clear(); // clear screen
		
		if(pjs.mouseControl.isPress("LEFT") && pjs.mouseControl.isInStatic(naumova.getStaticBox())){
			mas += 0.1;
			naumova.drawFrame(1);
			naumova.drawFrame(2);
		} else {
			naumova.drawFrame(naumova.frame);
		}
		
		brush.drawText({
		  x : 10, y : 10,
		  text : 'Масса: ' + mas.toFixed(1),
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		myCursor.draw();
		
	};

});

game.startLoop('myGame');