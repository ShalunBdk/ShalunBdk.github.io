var pjs = new PointJS(640, 960, {
	backgroundColor : '#01DF01' // optional
});
// pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Objects manager
var math   = pjs.math;           // More Math-methods

// var key   = pjs.keyControl.initKeyControl();
// var mouse = pjs.mouseControl.initMouseControl();
// var touch = pjs.touchControl.initTouchControl();
// var act   = pjs.actionControl.initActionControl();

var width  = game.getWH().w; // width of scene viewport
var height = game.getWH().h; // height of scene viewport

pjs.system.setTitle('PointJS Game'); // Set Title for Tab or Window

// Game Loop
while(WX1==RX1 && WY1==RY1 && WX2==RX2 && WY2==RY2 && WY1==WY2 && WX1==WX2 && RY1==RY2 && RX1==RX2 && WX1==RX2 && WY1==RY2){
	var WX1 = pjs.math.random( 0, width/80-1, false );
	var WY1 = pjs.math.random( 0, height/80-1, false );

	var RX1 = pjs.math.random( 0, width/80-1, false );
	var RY1 = pjs.math.random( 0, height/80-1, false );
	
	var WX2 = pjs.math.random( 0, width/80-1, false );
	var WY2 = pjs.math.random( 0, height/80-1, false );

	var RX2 = pjs.math.random( 0, width/80-1, false );
	var RY2 = pjs.math.random( 0, height/80-1, false );
}
game.newLoopFromConstructor('myGame', function () {
	// Constructor Game Loop

	/*var wolf = game.newImageObject( { 
		file : "wolf.png", 
		x : 0, 
		y : 0,
		w: 80, h: 80,
		//scale : 0.15, // уменьшить картинку в 2 раза, если не заданы ширина и высота
	});*/
	
	var wolfsM = [];
	var wolfsW = [];
	var rabbits = [];
	var grass = [];
	var grassT = [];
	
	/*var rabbit = game.newImageObject( { 
		file : "rabit.png", 
		x : 320, 
		y : 320,
		w: 80, h: 80,
		//scale : 0.1, // уменьшить картинку в 2 раза, если не заданы ширина и высота
	});*/
	
	/*var grass = game.newImageObject( { 
		file : "grass.png", 
		x : 0, 
		y : 0,
		w: 80, h: 80
		//scale : 0.1, // уменьшить картинку в 2 раза, если не заданы ширина и высота
	});*/
	
	var schet = 0;
	
	this.update = function () {
		// Update function

		game.clear(); // clear screen
		
		schet++;
		if(schet == 101) { 
			schet=0;
			console.log(grassT[1]);
			OOP.forArr(grassT, function (wl, i) {
				if(wl!=0)grassT[i]--;
				if(wl==0)grass[i].visible = true;
			});
		}
		
		OOP.forArr(wolfsM, function (wl, i) { // i - идентификатор
			if(schet == 100) { 
				var turn = pjs.math.random( 1, 4, true );
			}
			wl.draw(); // Рисуем подарок
			if(turn == 1 && schet==100 && wl.x<width-80){
			wl.move(point(80, 0));
			}else if(turn == 2 && schet == 100 && wl.y<height-80){
				wl.move(point(0, 80));
			}else if(turn == 3 && schet == 100 && wl.y>0){
				wl.move(point(0, -80));
			}else if(turn == 4 && schet == 100 && wl.x>0){
				wl.move(point(-80, 0));
			}
			OOP.forArr(grass, function (gl, j) { // i - идентификатор
				if((gl.x == wl.x) && (gl.y == wl.y)){ gl.visible = false;grassT[j]=10; }
			});
			
			if(schet == 100){
				OOP.forArr(rabbits, function (ml, k) {
					if(ml.x == wl.x && ml.y == wl.y-80){
						rabbits.splice(k, 1);
					}//sverhu
					if(ml.x == wl.x && ml.y == wl.y+80){
						rabbits.splice(k, 1);
					}//snizu
					if(ml.x == wl.x-80 && ml.y == wl.y){
						rabbits.splice(k, 1);
					}//sleva
					if(ml.x == wl.x+80 && ml.y == wl.y){
						rabbits.splice(k, 1);
					}//sprava
				});
			}
			
			if(schet == 100){
				OOP.forArr(wolfsW, function (ml, i) {
					var chance = pjs.math.random( 1, 8, true );
					var pol = pjs.math.random( 1, 2, true );
					if(ml.x == wl.x && ml.y == wl.y-80 ){
						if(pol == 1){
							wolfsM.push(game.newImageObject({
							file : "wolfM.png", 
							x : ml.x+80, 
							y : ml.y+80,
							w: 80, h: 80,
						}));
						}
						if(pol == 2){
							wolfsW.push(game.newImageObject({
							file : "wolfW.png", 
							x : ml.x+80, 
							y : ml.y+80,
							w: 80, h: 80,
						}));
						}
						console.log(chance);
					}//sverhu
					if(ml.x == wl.x && ml.y == wl.y+80){
						if(pol == 1){
							wolfsM.push(game.newImageObject({
							file : "wolfM.png", 
							x : ml.x-80, 
							y : ml.y-80,
							w: 80, h: 80,
						}));
						}
						if(pol == 2){
							wolfsW.push(game.newImageObject({
							file : "wolfW.png", 
							x : ml.x-80, 
							y : ml.y-80,
							w: 80, h: 80,
						}));
						}
						console.log(chance);
					}//snizu
					if(ml.x == wl.x-80 && ml.y == wl.y ){
						if(pol == 1){
							wolfsM.push(game.newImageObject({
							file : "wolfM.png", 
							x : ml.x+80, 
							y : ml.y-80,
							w: 80, h: 80,
						}));
						}
						if(pol == 2){
							wolfsW.push(game.newImageObject({
							file : "wolfW.png", 
							x : ml.x+80, 
							y : ml.y-80,
							w: 80, h: 80,
						}));
						}
						console.log(chance);
					}//sleva
					if(ml.x == wl.x+80 && ml.y == wl.y ){
						if(pol == 1){
							wolfsM.push(game.newImageObject({
								file : "wolfM.png", 
								x : ml.x-80, 
								y : ml.y+80,
								w: 80, h: 80,
							}));
						}
						if(pol == 2){
							wolfsW.push(game.newImageObject({
								file : "wolfW.png", 
								x : ml.x-80, 
								y : ml.y+80,
								w: 80, h: 80,
							}));
						}
						console.log(chance);
					}//sprava
				});
			}
			
		});
		
		OOP.forArr(wolfsW, function (wl, i) { // i - идентификатор
			if(schet == 100) { 
				var turn = pjs.math.random( 1, 4, true );
			}
			wl.draw(); // Рисуем подарок
			if(turn == 1 && schet==100 && wl.x<width-80){
			wl.move(point(80, 0));
			}else if(turn == 2 && schet == 100 && wl.y<height-80){
				wl.move(point(0, 80));
			}else if(turn == 3 && schet == 100 && wl.y>0){
				wl.move(point(0, -80));
			}else if(turn == 4 && schet == 100 && wl.x>0){
				wl.move(point(-80, 0));
			}
			
			OOP.forArr(grass, function (gl, j) { // i - идентификатор
				if((gl.x == wl.x) && (gl.y == wl.y)){ gl.visible = false;if(grassT[j] == 0)grassT[j]=10; }
			});
			
			if(schet == 100){
				OOP.forArr(rabbits, function (ml, k) {
					if(ml.x == wl.x && ml.y == wl.y-80){
						rabbits.splice(k, 1);
					}//sverhu
					if(ml.x == wl.x && ml.y == wl.y+80){
						rabbits.splice(k, 1);
					}//snizu
					if(ml.x == wl.x-80 && ml.y == wl.y){
						rabbits.splice(k, 1);
					}//sleva
					if(ml.x == wl.x+80 && ml.y == wl.y){
						rabbits.splice(k, 1);
					}//sprava
				});
			}
		});
		
		OOP.forArr(rabbits, function (rl, i) { // i - идентификатор
			if(schet == 100) { 
				var turnZ = pjs.math.random( 1, 4, true );
			}
			rl.draw(); // Рисуем подарок
			if(turnZ == 1 && schet==100 && rl.x<width-80){
			rl.move(point(80, 0));
			}else if(turnZ == 2 && schet == 100 && rl.y<height-80){
				rl.move(point(0, 80));
			}else if(turnZ == 3 && schet == 100 && rl.y>0){
				rl.move(point(0, -80));
			}else if(turnZ == 4 && schet == 100 && rl.x>0){
				rl.move(point(-80, 0));
			}
			
			OOP.forArr(grass, function (gl, j) { // i - идентификатор
				if((gl.x == rl.x) && (gl.y == rl.y)){ gl.visible = false;if(grassT[j] == 0)grassT[j]=10; }
			});
			if(schet == 100){
				OOP.forArr(rabbits, function (ml, i) {
					var chance = pjs.math.random( 1, 8, true );
					if(ml.x == rl.x && ml.y == rl.y-80 && chance == 3){
						rabbits.push(game.newImageObject({
							file : "rabit.png", 
							x : ml.x+80, 
							y : ml.y+80,
							w: 80, h: 80,
						}));
					}//sverhu
					if(ml.x == rl.x && ml.y == rl.y+80 && chance == 3){
						rabbits.push(game.newImageObject({
							file : "rabit.png", 
							x : ml.x-80, 
							y : ml.y-80,
							w: 80, h: 80,
						}));
					}//snizu
					if(ml.x == rl.x-80 && ml.y == rl.y && chance == 3){
						rabbits.push(game.newImageObject({
							file : "rabit.png", 
							x : ml.x+80, 
							y : ml.y-80,
							w: 80, h: 80,
						}));
					}//sleva
					if(ml.x == rl.x+80 && ml.y == rl.y && chance == 3){
						rabbits.push(game.newImageObject({
							file : "rabit.png", 
							x : ml.x-80, 
							y : ml.y+80,
							w: 80, h: 80,
						}));
					}//sprava
				});
			}
		});
		
		OOP.forArr(grass, function (gl, i) { // i - идентификатор
			gl.draw(); // Рисуем подарок
		});
		
		
	};

	this.entry = function () { // optional
		for(var i=0;i<height;i+=80){
			for(var j=0;j<width;j+=80){
				grass.push(game.newImageObject({
					file : "grass.png", 
					x : j, 
					y : i,
					w: 80, h: 80,
				}));
				grassT.push(0);
			}
		}
		wolfsM.push(game.newImageObject({
			file : "wolfW.png", 
			x : WX1*80, 
			y : WY1*80,
			w: 80, h: 80,
		}));
		wolfsW.push(game.newImageObject({
			file : "wolfM.png", 
			x : WX2*80, 
			y : WY2*80,
			w: 80, h: 80,
		}));
		rabbits.push(game.newImageObject({
			file : "rabit.png", 
			x : RX1*80, 
			y : RY1*80,
			w: 80, h: 80,
		}));
		rabbits.push(game.newImageObject({
			file : "rabit.png", 
			x : RX2*80, 
			y : RY2*80,
			w: 80, h: 80,
		}));
		var turn = pjs.math.random( 1, 4, true );
		var turnZ = pjs.math.random( 1, 4, true );
		log('myGame is started');
	};

	this.exit = function () { // optional
		log('myGame is stopped');
	};

});

game.startLoop('myGame');