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
var loaded = pjs.resources.isLoaded();

// var key   = pjs.keyControl.initKeyControl();
var mouse = pjs.mouseControl.initMouseControl();
// var touch = pjs.touchControl.initTouchControl();
// var act   = pjs.actionControl.initActionControl();

var width  = 900; // width of scene viewport
var height = 600; // height of scene viewport

function truncated(num) {
 return Math.trunc(num * 100) / 100;
}

pjs.system.setTitle('Naumova Click'); // Set Title for Tab or Window

var user = {
	name : '',
	id : '',
	avatar : '',
	mas : 60,
	coin : 0
}

var mas=60;
var money=0;
var mouse=1;
var eatprice = 2;
var saybool = false;
var bonustime = 0;

function save(){
	VK.api("storage.set", {user_id: user.id, key : 'coin', value : user.coin}, function(data) {
		console.log('coin ОБНОВЛЕН');
	});
	VK.api("storage.set", {user_id: user.id, key : 'mas', value : user.mas}, function(data) {
		console.log('coin ОБНОВЛЕН');
	});
	VK.api("storage.set", {user_id: user.id, key : 'bonustime', value : bonustime}, function(data) {
		console.log('coin ОБНОВЛЕН');
	});
}

var timerSave = OOP.newTimer(30000, function () {
    save();
	console.log('saving');
  });

game.newLoopFromConstructor('myGame', function () {
	
	var naumova = game.newAnimationObject({
	  animation : pjs.tiles.newAnimation('pic/naumova_click.png', 256, 256, 3),
	  h: 300,
	  w : 300,
	  delay : 1,
	  y : 100, x : 250
	});
	
	var saytxt = game.newTextObject({
			x : 485, y : 125,
			text : 'Я устала или голодная',
			size : 18,
			color : '#000000',
			style : 'bold',
			font : 'Arial'
	});
	
	
	
	var timer = pjs.OOP.newTimer(2000, function () { 
		saybool = false;
	});
	
	var bonustimer = pjs.OOP.newTimer(1000, function () { 
		if(bonustime != 0)bonustime -= 1000;
		log(bonustime);
		bonustimer.start();
	});
	
	function say(){
		saybool = true;
		timer.start();
	}
	  
	var fotoses = game.newImageObject({
		x : 10, y : 100,
		w: 200, h : 50,
		file : 'pic/fotoses.png',
	});
	
	var coin = game.newImageObject({
		x : 620, y : 1,
		w: 50, h : 50,
		file : 'pic/coin.png',
	});
	
	var saybg = game.newImageObject({
		x : 450, y : 90,
		w: 300, h : 100,
		file : 'pic/say.png',
	});
	
	this.update = function () {
		
		game.clear(); // clear screen
		
		if(pjs.mouseControl.isPress("LEFT") && pjs.mouseControl.isInStatic(naumova.getStaticBox()) && money >= eatprice){
			mas += 0.1;
			money -= eatprice;
			naumova.drawFrame(1);
			naumova.drawFrame(2);
		} else if(pjs.mouseControl.isPress("LEFT") && pjs.mouseControl.isInStatic(naumova.getStaticBox()) && money < eatprice){
			naumova.drawFrame(naumova.frame);
			timer.restart(2000);
			saytxt.setText("Мне нужно целых" + eatprice + " рублей");
			say();
		} else {
			naumova.drawFrame(naumova.frame);
		}
		
		if(pjs.mouseControl.isPress("LEFT") && pjs.mouseControl.isInStatic(fotoses.getStaticBox()) && mas > 40){
			mas -= 10;
			money += 100;
		} else if(pjs.mouseControl.isPress("LEFT") && mas <= 40 && pjs.mouseControl.isInStatic(fotoses.getStaticBox())){
			timer.restart(2000);
			saytxt.setText("Я устала или голодная");
			say();
		}
		
		if(pjs.mouseControl.isPress("LEFT") && pjs.mouseControl.isInStatic(coin.getStaticBox()) && bonustime == 0){
			money += 500;
			bonustime = 120000;
			log("start");
			bonustimer.start();
		} else if(pjs.mouseControl.isPress("LEFT") && bonustime != 0 && pjs.mouseControl.isInStatic(coin.getStaticBox())){
			timer.restart(2000);
			saytxt.setText("Ещё рано для бонуса");
			say();
		}
		
		if(saybool){
			saybg.draw();
			saytxt.draw();
			saybg.setVisible(true);
			saytxt.setVisible(true);
		}else{
			saybg.setVisible(false);
			saytxt.setVisible(false);
		}
		
		timerSave.restart();
		
		brush.drawText({
		  x : 10, y : 10,
		  text : 'Масса: ' + truncated(mas),
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		brush.drawText({
		  x : 680, y : 10,
		  text : 'Деньги: ' + money,
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		if(bonustime == 0){
			brush.drawText({
				x : 370, y : 10,
				text : 'Бонус готов -->',
				size : 30,
				color : 'red',
				strokeColor : 'black',
				strokeWidth : 2,
				style : 'bold',
				font : 'Arial'
			});
		}else if(bonustime >= 60000){
			bonustimer.restart(1000);
			brush.drawText({
				x : 330, y : 10,
				text : 'До бонуса 2:' + truncated((bonustime/1000 - 60)),
				size : 30,
				color : 'blue',
				strokeColor : 'black',
				strokeWidth : 2,
				style : 'bold',
				font : 'Arial'
			});
		}else if(bonustime >= 1 && bonustime < 60000){
			bonustimer.restart(1000);
			brush.drawText({
				x : 250, y : 10,
				text : 'До бонуса ' + truncated((bonustime/1000)) + " секунд(ы)",
				size : 30,
				color : 'blue',
				strokeColor : 'black',
				strokeWidth : 2,
				style : 'bold',
				font : 'Arial'
			});
		}
		
		fotoses.draw();
		coin.draw();
		//myCursor.draw();
		
	};

});

game.newLoopFromConstructor('load', function () {
	this.update = function () {
		VK.api("users.get", {'fields':'photo_50'}, function(data) {
			user.name = '' + data.response[0].first_name;
			user.id = '' + data.response[0].id;
			user.avatar = '' + data.response[0].photo_50;
			console.log(user);
		});
		VK.api("storage.get", {user_id: user.id, keys : 'coin, mas,bonustime'}, function(data) {
			user.coin = data.response[0];
			user.mas = data.response[1];
			bonustime = data.response[2];
			console.log(data.response);
		});
		if(pjs.resources.isLoaded() == false){
			brush.drawText({
			  x : 720, y : 10,
			  text : 'Загрузка: ' + pjs.resources.getProgress(),
			  size : 30,
			  color : '#FFFFFF',
			  strokeColor : 'black',
			  strokeWidth : 2,
			  style : 'bold',
			  font : 'Arial'
			});
		} else {
			game.startLoop('myGame');
		}
	}
});

game.startLoop('load');

