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

pjs.system.setTitle('Naumova Click'); // Set Title for Tab or Window

var user = {
		money: 0,
		mas: 60,
		id : '',
		name : 'none',
		avatar : '',
		loaded : true
	};

var mouse=1;
var eatprice = 2;
var saybool = false;
var bonustime = 0;

game.newLoopFromConstructor('myGame', function () {
	
	var save = function(){
		VK.api("storage.set", {user_id: user.id, key : 'money',  value : user.money}, function(data) {
			user.money = data.response;
			console.log(data.response);
		});
		VK.api("storage.set", {user_id: user.id, key : 'mas',  value : user.mas}, function(data) {
			user.mas = data.response;
			console.log(data.response);
		});
		VK.api("storage.set", {user_id: user.id, key : 'bonustime',  value : user.money}, function(data) {
			bonustime = data.response;
			console.log(data.response);
		});
	}
	
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
		
		if(pjs.mouseControl.isPress("LEFT") && pjs.mouseControl.isInStatic(naumova.getStaticBox()) && user.money >= eatprice){
			user.mas += 0.1;
			user.money -= eatprice;
			naumova.drawFrame(1);
			naumova.drawFrame(2);
		} else if(pjs.mouseControl.isPress("LEFT") && pjs.mouseControl.isInStatic(naumova.getStaticBox()) && user.money < eatprice){
			naumova.drawFrame(naumova.frame);
			timer.restart(2000);
			saytxt.setText("Мне нужно целых" + eatprice + " рублей");
			say();
		} else {
			naumova.drawFrame(naumova.frame);
		}
		
		if(pjs.mouseControl.isPress("LEFT") && pjs.mouseControl.isInStatic(fotoses.getStaticBox()) && user.mas > 40){
			user.mas -= 10;
			user.money += 100;
		} else if(pjs.mouseControl.isPress("LEFT") && user.mas <= 40 && pjs.mouseControl.isInStatic(fotoses.getStaticBox())){
			timer.restart(2000);
			saytxt.setText("Я устала или голодная");
			say();
		}
		
		if(pjs.mouseControl.isPress("LEFT") && pjs.mouseControl.isInStatic(coin.getStaticBox()) && bonustime == 0){
			user.money += 500;
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
		
		brush.drawText({
		  x : 10, y : 10,
		  text : 'Масса: ' + (user.mas).toFixed(1),
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		brush.drawText({
		  x : 680, y : 10,
		  text : 'Деньги: ' + user.money,
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
				text : 'До бонуса 2:' + (bonustime/1000 - 60).toFixed(),
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
				text : 'До бонуса ' + (bonustime/1000).toFixed() + " секунд(ы)",
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
	
	this.exit = function () {
		save();
	}
});

game.newLoopFromConstructor('load', function () {
	this.entry = function(){
		VK.api("users.get", {'fields':'photo_50'}, function(data) {
			user.name = '' + data.response[0].first_name;
			user.id = '' + data.response[0].id;
			user.avatar = '' + data.response[0].photo_50;
			console.log(user);
			user.loaded = true;
		});
		VK.api("storage.get", {user_id: user.id, key : 'money'}, function(data) {
			user.money = data.response;
			console.log(data.response);
		});
		VK.api("storage.get", {user_id: user.id, key : 'mas'}, function(data) {
			user.mas = data.response;
			console.log(data.response);
		});
		VK.api("storage.get", {user_id: user.id, key : 'bonustime'}, function(data) {
			bonustime = data.response;
			console.log(data.response);
		});
	}
	
	this.update = function () {
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

