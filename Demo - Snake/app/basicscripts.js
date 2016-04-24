var allScripts = [];

var nullScripts = {onCreate:null, update:null, onHit:null, onDestroy:null};

//----------------------------------------\\
var snakeHeadOnCreate = function($scope, object){
	var snake = {	
		0: {way: 1, score: 0, x: object.pos.x, y: object.pos.y, _id: 0, snakeSize: 3, isAlive: true}
	};

	$scope.objects.push({type:3, pos:{x:object.pos.x, y:object.pos.y - 1}, scripts:snakeBodyScripts, toDestroy:false, hits:{u:0, r:0, d:0, l:0}});
	$scope.objects.push({type:3, pos:{x:object.pos.x, y:object.pos.y - 2}, scripts:snakeBodyScripts, toDestroy:false, hits:{u:0, r:0, d:0, l:0}});
	

	snake[1] = (1, {way: 1, x: object.pos.x, y: object.pos.y - 1, _id: 1});
	snake[2] = (2, {way: 1, x: object.pos.x, y: object.pos.y - 2, _id: 2});
	object.snake = snake;

    var keys = {};
    object.jumping = 0;
    var obj = null;
    var key = false;

    window.onkeydown = function (e) {
        keys["key" + e.which] = true;
    }
    object.isKeyDown = function (code) {
        if (keys["key" + code]) {
            return true;
        }
        return false;
    }
    object.clearKeyEvent = function() {
        for (var code in keys) {
            if (keys.hasOwnProperty(code)) {
                keys[code] = false;
            }
        }
    }

}

var  snakeHeadUpdate = function($scope, object){

	if (object.isKeyDown(37) && object.snake[0].isAlive == true){
		object.snake[0].way++;
	 	if (object.snake[0].way > 4)
	 		object.snake[0].way = 1;	
	}
	if (object.isKeyDown(39) && object.snake[0].isAlive == true){
		object.snake[0].way--;
	 	if (object.snake[0].way == 0)
	 		object.snake[0].way = 4;	
	}
	var nextPos = getPosByWay(object.snake[0].way, object.snake[0].x, object.snake[0].y);
	var eated = false;


	if (object.getObjectAt(4, nextPos.x, nextPos.y) != null)
	{
		var allObj = object.getObjectAt(4, nextPos.x, nextPos.y);
		allObj.pos.x = allObj.pos.y = 0;
		allObj.type = 0;
		var newX = (Math.random() * 8);
		var newY = (Math.random() * 12);
		var nb;
		for (nb = 0; nb < newX; nb++){}
		newX = nb;
		for (nb = 0; nb < newY; nb++){}
		newY = nb;
		$scope.objects.push({
				type:4, pos:{x:newX, y:newY},
				scripts:snakeBodyScripts,
				toDestroy:false,
				hits:{u:0, r:0, d:0, l:0}
			});
		eated = true;
		$scope.objects.push(
			{type:3, pos:{
					x:object.snake[object.snake[0].snakeSize - 1].x,
					y:object.snake[object.snake[0].snakeSize - 1].y
					}, 
				scripts:snakeBodyScripts,
				toDestroy:false,
				hits:{u:0, r:0, d:0, l:0}
				}
			);

		object.snake[object.snake[0].snakeSize] = (
				object.snake[0].snakeSize, {
					way: 1, x: object.snake[object.snake[0].snakeSize - 1].x ,
					y: object.snake[object.snake[0].snakeSize - 1].y, 
					_id: object.snake[0].snakeSize
				}
			);
	}
	if (object.getObjectAt(1, nextPos.x, nextPos.y) == null && object.getObjectAt(3, nextPos.x, nextPos.y) == null){
		for (var nb = object.snake[0].snakeSize -1; nb > 0; nb--)
		{
			var obj = object.getObjectAt(3, object.snake[nb].x, object.snake[nb].y);
			obj.pos.x = object.snake[nb - 1].x;
			obj.pos.y = object.snake[nb - 1].y;
			object.snake[nb].x = object.snake[nb - 1].x;
			object.snake[nb].y = object.snake[nb - 1].y;					
		}
		object.snake[0].x = nextPos.x;
		object.snake[0].y = nextPos.y;
		object.pos.x = object.snake[0].x;
		object.pos.y = object.snake[0].y;
	 }
	else 
		object.snake[0].isAlive = false;
	if (eated == true)
		object.snake[0].snakeSize++;
	object.clearKeyEvent();
}
var snakeHeandOnDestroy = function(object){
	alert("The snake is dead you lose.");
	delete object;
}
var snakeHeadScripts = {onCreate: snakeHeadOnCreate, update: snakeHeadUpdate, onHit:null, onDestroy: snakeHeandOnDestroy};
//----------------------------------------\\

//----------------------------------------\\

var snakeBodyOnCreate = function($scope, object){

}

var snakeBodyUpdate = function($score, object){
}
var snakeBodyOnDestroy = function(object){
	delete object;
}
var snakeBodyScripts = {onCreate: snakeBodyOnCreate, update: snakeBodyUpdate, onHit:null, onDestroy: snakeBodyOnDestroy};
//----------------------------------------\\

var fruitOnCreate = function($scope, object){
}
var fruitUpdate = function($score, object){

}
var fruitOnDestroy = function(object){
	delete object;
}
var fruitScripts = {onCreate: fruitOnCreate, update: fruitUpdate, onHit:null, onDestroy: fruitOnDestroy};
//----------------------------------------\\




allScripts.push(nullScripts);
allScripts.push(nullScripts);
allScripts.push(snakeHeadScripts);
allScripts.push(snakeBodyScripts);
allScripts.push(fruitScripts);


var getPosByWay = function (way, x, y)
{
	var newX = getNextX(way, x, y);
	var newY = getNextY(way, x, y);
	return ({x: newX, y:newY});
}

var getNextX = function(way, x, y){
	if (way % 2 != 0)
		return x;
	else if (way % 2 == 0){
		if (way == 2)
			return (x + 1);
		else 
			return (x - 1);
	}
}

var getNextY = function(way, x, y){
	if (way % 2 != 0) {
		if (way == 1)
			return (y + 1);
		else 
			return (y - 1);
	}
	return (y);
}


