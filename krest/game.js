var pjs = new PointJS('2D', 900, 600, { // 16:9
  backgroundColor : '#FFFFFF' // if need
});

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Object's manager
var math   = pjs.math;           // More Math-methods
var levels = pjs.levels;         // Levels manager

var key   = pjs.keyControl.initKeyControl();
var mouse = pjs.mouseControl.initMouseControl();

var width  = 900; // width of scene viewport
var height = 600; // height of scene viewport
// Получим резолюцию экрана
var r = game.getResolution();
var lm = pjs.memory.local;

function truncated(num) {
 return Math.trunc(num * 100) / 100;
}

pjs.system.setTitle('Happy New Year Game'); // Set Title for Tab or Window

var user = {
		score: 0,
		id : '',
		name : 'none',
		avatar : '',
		coin: 0,
		loaded : false
	};
	
	var naum_fall = 0;
	
	var speed = 3;
	
	var boots = false;

game.newLoopFromConstructor('myGame', function () {
	
	var GAME = 0;
	var MAX_SCORE = 0;
	var MAX_NAME = 'Админ';
	var MAX_AVATAR = '';
	
	var LAST_NAME = 'noname';
	var LAST_SCORE = 0;
	var LAST_AVATAR = '';
	
	var speedG = 2;
	var direction = 1;
	
	var dev = false;
	
	var score = 0;
	
	var health = 3;
	
	var save = function(){
		VK.api("storage.set", {global : 1, key : 'MAX_SCOR', value : parseInt(MAX_SCORE)}, function(data) {
			console.log('РЕКОРД ОБНОВЛЕН');
		});
		VK.api("storage.set", {global: 1, key : 'MAX_NAME', value : MAX_NAME}, function(data) {
			console.log('NAME РЕКОРД ОБНОВЛЕН');
		});
		VK.api("storage.set", {user_id: user.id, key : 'scor', value : parseInt(user.score)}, function(data) {
			console.log('NAME РЕКОРД ОБНОВЛЕН');
		});
		VK.api("storage.set", {global : 1, key : 'MAX_AVATAR', value : MAX_AVATAR}, function(data) {
			console.log('AVATAR РЕКОРД ОБНОВЛЕН');
		});
		VK.api("storage.set", {global : 1, key : 'LAST_NAME', value : LAST_NAME}, function(data) {
			console.log('LAST_GAME РЕКОРД ОБНОВЛЕН');
		});
		VK.api("storage.set", {global : 1, key : 'LAST_SCORE', value : parseInt(LAST_SCORE)}, function(data) {
			console.log('LAST_GAME РЕКОРД ОБНОВЛЕН');
		});
		VK.api("storage.set", {global : 1, key : 'LAST_AVATAR', value : LAST_AVATAR}, function(data) {
			console.log('LAST_AVATAR РЕКОРД ОБНОВЛЕН');
		});
		VK.api("storage.set", {user_id: user.id, key : 'coin', value : parseInt(user.coin)}, function(data) {
			console.log('coin ОБНОВЛЕН');
		});
		VK.api("storage.set", {user_id: user.id, key : 'boots', value : boots}, function(data) {
			console.log('boots ОБНОВЛЕН');
		});
	}
	
	
  var pl = game.newImageObject({
    file : 'pic/krest_right_down.png',
    h : 150, // Оптимальный размер санты
    onload : function () {
      // отпозиционируем его по высоте
      this.y = -this.h + height; // Отлично
    }
  });
  var santa = game.newAnimationObject({
	  animation : pjs.tiles.newAnimation('pic/krest_anim.png', 225, 439, 2),
	  h: 150,
	  w : 100,
	  delay : 10,
	  y : -150 + height
	});

  var photo1 = game.newImageObject({
    file : MAX_AVATAR,
	x : 50,
	y : 200
  });
  
  var photo2 = game.newImageObject({
    file : LAST_AVATAR,
	x : 50,
	y : 400
  });
  
  
  var heal = game.newImageObject({
    file : 'pic/health.png',
	x : 800,
	y : 100,
	w : 50,
	h : 50
  });
  
  // Объявим массив с подарками
  var podarki = [];
  var coins = [];

  // Создадим таймер, который будет добавлять подарки
  var timer = OOP.newTimer(1000, function () {
    podarki.push(game.newImageObject({
      x : math.random(0, width - 200), // 50*r - ширина объекта
      y : -math.random(200, 600), // уберем минус, так как он уже есть
      w : 120, h : 120,
      file : 'pic/naumova1.png'
    }));
	naum_fall++;
  });
  var timerSave = OOP.newTimer(120000, function () {
    save();
	console.log('saving');
  });
  
  this.update = function () {

    // Задействуем фактор дельта-тайм
    var dt = game.getDT(10); // 10 - это делитель дкльты для
    // удобного округления

    game.clear(); // clear screen

	if(GAME == 1){
	
	var back = game.newImageObject({
    file : 'pic/bg_3.jpg',
    h : 600 // Растягивание фона под экран
	});
	
    back.draw(); // Отрисуем фон
	if(direction == 0) santa.setFlip(true, false);
	if(direction == 1) santa.setFlip(false, false);
	//santa.draw(); // Отрисуем санту
	
	if(score > MAX_SCORE){		
		MAX_SCORE = score;
		MAX_NAME = user.name;
		MAX_AVATAR = user.avatar;
		
	}
	
	if(score > user.score){
		user.score = score;
	}
	
    if(health == 0){
		GAME = 2;
		LAST_SCORE = score;
		LAST_AVATAR = user.avatar;
		LAST_NAME = user.name;
		save();
		score = 0;
		health = 3;
		OOP.clearArr(podarki);
	}
	
	if(health == 1) {
		heal.simpleDraw( point(850, 10) );
	}else if(health == 2){
		heal.simpleDraw( point(850, 10) );
		heal.simpleDraw( point(800, 10) );
	}else if(health == 3){
		heal.simpleDraw( point(850, 10) );
		heal.simpleDraw( point(800, 10) );
		heal.simpleDraw( point(750, 10) );
	}else if(health == 4){
		heal.simpleDraw( point(850, 10) );
		heal.simpleDraw( point(800, 10) );
		heal.simpleDraw( point(750, 10) );
		heal.simpleDraw( point(700, 10) );
	}else if(health == 5){
		heal.simpleDraw( point(850, 10) );
		heal.simpleDraw( point(800, 10) );
		heal.simpleDraw( point(750, 10) );
		heal.simpleDraw( point(700, 10) );
		heal.simpleDraw( point(650, 10) );
	}
	
    timer.restart();
	timerSave.restart();

    OOP.forArr(podarki, function (el, i) { // i - идентификатор
      el.draw(); // Рисуем подарок
      el.move(point(0, speedG*dt)); // Двигаем вниз
		
		if(el.y > height){
			el.y = -math.random(200, 600);
			health -= 1;
			podarki.splice(i, 1);
		}
      // Проверка на столкновение подарка с сантой

      if (el.isIntersect(santa)) {
        podarki.splice(i, 1); // i - идентификатор, 1 - количество
        score++; // Увеличиваем счет
      }

    });
	
	if(naum_fall == 10){
		naum_fall = 0;
		coins.push(game.newImageObject({
		  x : math.random(0, width - 200), // 50*r - ширина объекта
		  y : -math.random(200, 600), // уберем минус, так как он уже есть
		  file : 'pic/NC.png'
		}));
	}
	
	OOP.forArr(coins, function (cl, i) { // i - идентификатор
      cl.draw(); // Рисуем подарок
      cl.move(point(0, speedG*dt)); // Двигаем вниз
		
		if(cl.y > height){
			coins.splice(i, 1);
		}
      // Проверка на столкновение подарка с сантой

      if (cl.isIntersect(santa)) {
        coins.splice(i, 1); // i - идентификатор, 1 - количество
        user.coin+=math.random(1, 5); // Увеличиваем счет
      }

    });
	
	brush.drawText({
		x : 60, y : 570,
		text : user.coin,
		size : 25,
		color : '#aaf0f8',
		strokeColor : 'black',
		strokeWidth : 2,
		style : 'bold',
		font : 'Arial'
	});
	
    if (key.isDown('LEFT')) {
      // Двигаем влево
      if (santa.x >= 0)
        santa.x -= speed * dt;
		santa.draw();
		direction = 0;
    }else if (key.isDown('RIGHT')) {
      // Двигаем влево
      if (santa.x+santa.w < width)
        santa.x += speed * dt;
		santa.draw();
		direction = 1;
    }else if (key.isDown('ESC')) {
		save();
		GAME = 0;
    }else {
		santa.drawFrame(santa.frame);
	}

    // Отрисуем счет
    brush.drawText({
      x : 10, y : 10,
      text : 'Счет: ' + score,
      size : 50 * r,
      color : '#FFFFFF',
      strokeColor : 'black',
      strokeWidth : 2,
      style : 'bold',
      font : 'Arial'
    });
	
		if(dev == true){
			brush.drawText({
			  x : 10, y : 110,
			  text : 'hp: ' + health,
			  size : 30,
			  color : '#FFFFFF',
			  strokeColor : 'black',
			  strokeWidth : 2,
			  style : 'bold',
			  font : 'Arial'
			});
			brush.drawText({
			  x : 10, y : 210,
			  text : 'naum massive: ' + podarki.length,
			  size : 30,
			  color : '#FFFFFF',
			  strokeColor : 'black',
			  strokeWidth : 2,
			  style : 'bold',
			  font : 'Arial'
			});
			santa.drawDynamicBox();
			OOP.forArr(podarki, function (el, i) {
				el.drawDynamicBox();
			});
		}
	
	} else if(GAME == 0 && user.loaded){
		back = game.newImageObject({
		file : 'pic/menu_game.png',
		h : 600,
		w : 900
		});
		back.draw();
		var game_buttom = game.newImageObject({
			file : 'pic/game_buttom.png',
			h : 114,
			w : 305,
			x : 285,
			y : 180
		});
		var shop_buttom = game.newImageObject({
			file : 'pic/shop_button.png',
			h : 114,
			w : 305,
			x : 285,
			y : 380
		});
		game_buttom.draw();
		shop_buttom.draw();
		brush.drawText({
		  x : 150, y : 30,
		  text : '' + score,
		  size : 50,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		brush.drawText({
		  x : 810, y : 30,
		  text : '' + user.score,
		  size : 50,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		
		brush.drawText({
		  x : 10, y : 150,
		  text : 'ТОП 1 по счету: ',
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		brush.drawText({
		  x : 20, y : 255,
		  text : MAX_NAME + '(' + MAX_SCORE + ')',
		  size : 25,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		brush.drawText({
		  x : 10, y : 350,
		  text : 'Последняя игра: ',
		  size : 30,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		brush.drawText({
		  x : 20, y : 455,
		  text : LAST_NAME + '(' + LAST_SCORE + ')',
		  size : 25,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		photo1.draw();
		
		photo2.draw();
		
		
		if(dev == true){
			brush.drawText({
			  x : 750, y : 130,
			  text : 'dev true',
			  size : 30,
			  color : '#FFFFFF',
			  strokeColor : 'black',
			  strokeWidth : 2,
			  style : 'bold',
			  font : 'Arial'
			});
		}
		if (mouse.isPeekObject('LEFT', game_buttom)) {
			GAME = 1;
		}
		if (mouse.isPeekObject('LEFT', shop_buttom)) {
			game.startLoop('shop');
		}
		if (key.isDown('D')) {
			dev = true;
		}
	}else if(GAME == 0 && user.loaded == false){
		
		brush.drawText({
		  x : 150, y : 30,
		  text : 'Загрузка...',
		  size : 50,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
	}else if(GAME == 2){
		brush.drawText({
		  x : 150, y : 30,
		  text : 'будет экран проигрыша | Для продолжения нажмите ENTER',
		  size : 25,
		  color : '#FFFFFF',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		if (key.isDown('ENTER')) {
			GAME = 0;
		}
	}

  };

  this.entry = function () { // [optional]
  if(user.loaded == false){
	VK.api("users.get", {'fields':'photo_50'}, function(data) {
			user.name = '' + data.response[0].first_name;
			user.id = '' + data.response[0].id;
			user.avatar = '' + data.response[0].photo_50;
			console.log(user);
			user.loaded = true;
		});
	VK.api("storage.get", {global: 1, key : 'MAX_NAME'}, function(data) {
			MAX_NAME = '' + data.response;
			console.log(data.response);
		});
	VK.api("storage.get", {global: 1, key : 'MAX_SCOR'}, function(data) {
			MAX_SCORE = data.response;
			console.log(data.response);
		});
	VK.api("storage.get", {user_id: user.id, key : 'scor'}, function(data) {
			user.score = data.response;
			console.log(data.response);
		});
	VK.api("storage.get", {global: 1, key : 'MAX_AVATAR'}, function(data) {
			MAX_AVATAR = data.response;
			console.log(data.response);
			photo1.setImage(MAX_AVATAR);
		});
	VK.api("storage.get", {global: 1, key : 'LAST_NAME'}, function(data) {
			LAST_NAME = data.response;
			console.log(data.response);
		});
	VK.api("storage.get", {global: 1, key : 'LAST_SCORE'}, function(data) {
			LAST_SCORE = data.response;
			console.log(data.response);
		});
	VK.api("storage.get", {global: 1, key : 'LAST_AVATAR'}, function(data) {
			LAST_AVATAR = data.response;
			console.log(data.response);
			photo2.setImage(LAST_AVATAR);
		});
	VK.api("storage.get", {user_id: user.id, key : 'coin'}, function(data) {
			user.coin = data.response;
			console.log(data.response);
		});
	VK.api("storage.get", {user_id: user.id, key : 'boots'}, function(data) {
			boots = data.response;
			console.log(data.response);
		});
  }
    OOP.clearArr(podarki);
    score = 0;
	if((pjs.resources.isLoaded() == true) && (user.loaded = true))GAME = 0;
  };
	this.exit = function () {
		save();
	}
});

game.newLoopFromConstructor('shop', function () {
	
	back = game.newImageObject({
		file : 'pic/bg_shop_noboot.png',
		h : 600,
		w : 900
		});
	
	buy_boot = game.newImageObject({
		file : 'pic/buy_boot.png',
		x: 60, y: 155,
		scale: 0.7
		});
	buy_fitness = game.newImageObject({
		file : 'pic/buy_boot.png',
		x: 240, y: 155,
		scale: 0.7
		});
	
	this.update = function () {
		
		if(boots == true)back.setImage( "pic/bg_shop_boot.png" );
		back.draw(); // Отрисуем фон
		buy_boot.draw();
		buy_fitness.draw();
		
		brush.drawText({
		  x : 60, y : 570,
		  text : user.coin,
		  size : 25,
		  color : '#aaf0f8',
		  strokeColor : 'black',
		  strokeWidth : 2,
		  style : 'bold',
		  font : 'Arial'
		});
		
		brush.drawText({
		  x : 80, y : 2,
		  text : truncated(speed),
		  size : 17,
		  color : '#07184f',
		  strokeColor : 'black',
		  strokeWidth : 1,
		  style : 'bold',
		  font : 'Arial'
		});
		
		if (mouse.isPeekObject('LEFT', buy_boot)) {
			if(!boots && user.coin > 199){ boots = true;user.coin -= 200;speed += 0.1; }
		}
		
		if (mouse.isPeekObject('LEFT', buy_fitness)) {
			if(boots && user.coin > 99){ user.coin -= 100;speed += 0.05; }
		}
		
		if (key.isDown('ESC')) {
			game.startLoop('myGame');
		}
		
	}
});

game.startLoop('myGame');
