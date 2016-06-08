var index = {
	init: function() {
		this.initPage();
		this.initEvent();
		this.initWidget();
	},
	initPage: function() {
		var index = this;
		index.showMoney();
		var counter = 0;
		setInterval(function() {
			counter++;
			index.createFishes(counter);
			index.fishesMove(counter);
			index.removeFishes();
			index.removeBullets();
			index.getFish();
			if (counter % 10000 === 0) counter = 0;
		}, 1);
		index.createCannon();
	},
	initEvent: function() {
		this.cannonMove();
		this.cannon_minus_left();
		this.cannon_minus_right();
	},
	initWidget: function() {
	},

	createFishes: function(counter) {
		var fishCategory = properties.fishesCategory[Math.floor(properties.fishesCategory.length * Math.random())];
		var className = fishCategory.className;
		var fishWidth = fishCategory.width;
		var fishHeight = fishCategory.height;
		var rotateDgreePerTimes = fishCategory.rotateDegree;
		var swingParams = fishCategory.swingParams;
		var generateWeight = fishCategory.generateWeight;
		var beCatchedWeight = fishCategory.beCatchedWeight;
		var price  = fishCategory.price;
		var hobby = Math.floor(3 * Math.random());
		if (counter % (10000 / generateWeight) === 0) {
			var fish = new Fish(className, 1, 0, -fishWidth, 100, rotateDgreePerTimes, swingParams, fishWidth, fishHeight, hobby,beCatchedWeight,price);
			fish.init();
			properties.fishes.push(fish);
		}
	},
	fishesMove: function(counter) {
		var fishes = properties.fishes;
		for (var i = 0; i < fishes.length; i++) {
			if (counter % 10 === 0&&fishes[i].moveFlag==true) {
				fishes[i].changeDegree();
				fishes[i].changeDirection();
				fishes[i].move();
			}
			if (counter % 20 === 0&&fishes[i].moveFlag==true) fishes[i].swing();
		}
		
	},
	removeFishes: function() {
		for (var i = 0; i < properties.fishes.length; i++) {
			var fish = properties.fishes[i];
			var maxLength = Math.sqrt((fish.width / 2) * (fish.width / 2) + (fish.height / 2) * (fish.height / 2));
			if ((fish.x + maxLength < 0) || (fish.x - maxLength > 1024) || (fish.y + maxLength < 0) || (fish.y - maxLength > 614.4)) {
				fish.remove();
				properties.fishes.splice(i, 1);
			}
		}
	},

	removeBullets: function() {
		for (var i = 0; i < properties.bullets.length; i++) {
			var bullet = properties.bullets[i];
			var maxLength = Math.sqrt((bullet.bulletWidth / 2) * (bullet.bulletWidth / 2) + (bullet.bulletHeight / 2) * (bullet.bulletHeight / 2));
			if ((bullet.x + maxLength < 0) || (bullet.x - maxLength > 1024) || (bullet.y + maxLength < 0) || (bullet.y - maxLength > 614.4)) {
				bullet.remove();
				properties.bullets.splice(i, 1);
			}
		}
	},
	createCannon:function(){
		var cannonCateGory = properties.cannonsCategory[properties.cannonNumber];
		var cannonWidth = cannonCateGory.width;
		var cannonHeight = cannonCateGory.height;
		var cannonImgArr = cannonCateGory.cannonImgArr;
		var className = cannonCateGory.className;
		var consumeGold = cannonCateGory.consumeGold;
		properties.cannon = new Cannon(cannonWidth,cannonHeight,cannonImgArr,className,consumeGold);
		properties.cannon.init(properties.cannonCenter.x,properties.cannonCenter.y);
	},

	cannonMove:function(){
		var containerEle = document.getElementById("fireGoal");
		containerEle.onclick = function(event){

			if(properties.fireFlag){

				properties.fireFlag=false;
				var fireCounter=0;
				var fireTimer = setInterval(function(){
					fireCounter++;
					if(fireCounter==5){
						properties.fireFlag=true;
						clearInterval(fireTimer);
					}
				},150);

				properties.gold-=properties.cannon.consumeGold;
				index.showMoney();
				var containerLeft = document.getElementById("container").offsetLeft;
				var containerTop = document.getElementById("container").offsetTop;
				var eventObj = event || window.event;
				var x = eventObj.clientX;
				var y = eventObj.clientY;
				x -= containerLeft;
				y -= containerTop;
				var k = (properties.cannonCenter.x-x)/(properties.cannonCenter.y-y);
				properties.cannon.ChangeDegree(k,properties.cannon);
			}
		}
	},

	cannon_minus_left:function(){
		var cannon_minus_leftEle = document.getElementById("cannon_minus_left");
		cannon_minus_leftEle.onmousedown = function(){
			cannon_minus_leftEle.style.backgroundImage = "url(./images/cannon_minus_down.png)";
		};
		cannon_minus_leftEle.onmouseup = function(){
			cannon_minus_leftEle.style.backgroundImage = "url(./images/cannon_minus.png)";
			if(properties.cannonNumber>0){
				properties.cannonNumber--;
				properties.cannon.removeCannon();
				index.createCannon();
			}
		}
	},

	cannon_minus_right:function(){
		var cannon_minus_rightEle = document.getElementById("cannon_minus_right");
		cannon_minus_rightEle.onmousedown = function(){
			cannon_minus_rightEle.style.backgroundImage = "url(./images/cannon_plus_down.png)";
		};
		cannon_minus_rightEle.onmouseup = function(){
			cannon_minus_rightEle.style.backgroundImage = "url(./images/cannon_plus.png)";
			if(properties.cannonNumber<properties.MaxCannonNumber){
				properties.cannonNumber++;
				properties.cannon.removeCannon();
				index.createCannon();
			}
		}
	},
	showMoney:function(){

		var money = properties.gold;
		var num0 = Math.floor(money/100000);
		var num1 = Math.floor((money%100000)/10000);
		var num2 = Math.floor((money%10000)/1000);
		var num3 = Math.floor((money%1000)/100);
		var num4 = Math.floor((money%100)/10);
		var num5 = money%10;

		document.getElementById("showMoney0").style.backgroundPositionY = properties.numberImgPositionYArr[num0]+"px";
		document.getElementById("showMoney1").style.backgroundPositionY = properties.numberImgPositionYArr[num1]+"px";
		document.getElementById("showMoney2").style.backgroundPositionY = properties.numberImgPositionYArr[num2]+"px";
		document.getElementById("showMoney3").style.backgroundPositionY = properties.numberImgPositionYArr[num3]+"px";
		document.getElementById("showMoney4").style.backgroundPositionY = properties.numberImgPositionYArr[num4]+"px";
		document.getElementById("showMoney5").style.backgroundPositionY = properties.numberImgPositionYArr[num5]+"px";

		//document.getElementById("showMoney").innerHTML = properties.gold+"";
	},
	showAddMoney:function(x,y,money){

		var showAddMoneyArr = [];
		var coinTextDivX,coinTextDiv0,coinTextDiv1,coinTextDiv2;
		if(money<10){
			coinTextDivX = document.createElement("div");
			coinTextDivX.setAttribute("class","coinText");
			//alert(properties.coinTextImgPositionXArr[10]);
			coinTextDivX.style.backgroundPositionX = properties.coinTextImgPositionXArr[10]+"px";
			showAddMoneyArr.push(coinTextDivX);
			coinTextDiv0 = document.createElement("div");
			coinTextDiv0.setAttribute("class","coinText");
			coinTextDiv0.style.backgroundPositionX = properties.coinTextImgPositionXArr[money]+"px";
			showAddMoneyArr.push(coinTextDiv0);

		}else if(money<100){
			coinTextDivX = document.createElement("div");
			coinTextDivX.setAttribute("class","coinText");
			coinTextDivX.style.backgroundPositionX = properties.coinTextImgPositionXArr[10]+"px";
			showAddMoneyArr.push(coinTextDivX);

			coinTextDiv0 = document.createElement("div");
			coinTextDiv0.setAttribute("class","coinText");
			coinTextDiv0.style.backgroundPositionX = properties.coinTextImgPositionXArr[Math.floor(money/10)]+"px";
			showAddMoneyArr.push(coinTextDiv0);

			coinTextDiv1 = document.createElement("div");
			coinTextDiv1.setAttribute("class","coinText");
			coinTextDiv1.style.backgroundPositionX = properties.coinTextImgPositionXArr[money%10]+"px";
			showAddMoneyArr.push(coinTextDiv1);
		}else{
			coinTextDivX = document.createElement("div");
			coinTextDivX.setAttribute("class","coinText");
			coinTextDivX.style.backgroundPositionX = properties.coinTextImgPositionXArr[10]+"px";
			showAddMoneyArr.push(coinTextDivX);

			coinTextDiv0 = document.createElement("div");
			coinTextDiv0.setAttribute("class","coinText");
			coinTextDiv0.style.backgroundPositionX = properties.coinTextImgPositionXArr[Math.floor(money/100)]+"px";
			showAddMoneyArr.push(coinTextDiv0);

			coinTextDiv1 = document.createElement("div");
			coinTextDiv1.setAttribute("class","coinText");
			coinTextDiv1.style.backgroundPositionX = properties.coinTextImgPositionXArr[Math.floor((money%100)/10)]+"px";
			showAddMoneyArr.push(coinTextDiv1);

			coinTextDiv2 = document.createElement("div");
			coinTextDiv2.setAttribute("class","coinText");
			coinTextDiv2.style.backgroundPositionX = properties.coinTextImgPositionXArr[money%10]+"px";
			showAddMoneyArr.push(coinTextDiv2);
		}


		var showAddMoneyDiv = document.createElement("div");
		var showAddMoneyDivWidth = showAddMoneyArr.length*properties.coinText.width;
		showAddMoneyDiv.style.width=showAddMoneyDivWidth+"px";
		showAddMoneyDiv.style.height=properties.coinText.height+"px";
		showAddMoneyDiv.style.position="absolute";
		showAddMoneyDiv.style.zIndex=2000;
		for(var k=0;k<showAddMoneyArr.length;k++){
			showAddMoneyDiv.appendChild(showAddMoneyArr[k]);
		}

		var container = document.getElementById("container");
		container.appendChild(showAddMoneyDiv);
		var translateX = x-showAddMoneyDivWidth/2;
		var translateY = y-properties.coinText.height/2;
		showAddMoneyDiv.style.transform="translate("+translateX+"px,"+translateY+"px)";
		var j = 0;
		var showAddMoneyInterval = setInterval(function(){
			translateY-=properties.coinText.speed;
			showAddMoneyDiv.style.transform="translate("+translateX+"px,"+translateY+"px)";
			j++;
			if(j==5){
				container.removeChild(showAddMoneyDiv);
				index.showMoney();
				clearInterval(showAddMoneyInterval);
			}
		},100);

	},
	getFish:function(){
			for(var i=0;i<properties.fishes.length;i++){
				var fish = properties.fishes[i];
				for(var j=0;j<properties.bullets.length;j++){
					var bullet = properties.bullets[j];
					var rx = fish.x-bullet.x;
					var ry = fish.y-bullet.y;
					var s = Math.sqrt(rx*rx+ry*ry);
					if(s<=(fish.width/3)){
						bullet.bulletWidth = properties.websCategory[properties.cannonNumber].width;
						bullet.bulletHeight = properties.websCategory[properties.cannonNumber].height;
						var webTranslateX = bullet.x-bullet.bulletWidth/2;
						var webTranslateY = bullet.y-bullet.bulletHeight/2;

						bullet.moveFlag=false;
						bullet.bulletEle.setAttribute("class","web"+properties.cannonNumber);
						bullet.bulletEle.style.transform = "translate("+webTranslateX+"px,"+webTranslateY+"px)";

						for(var k= 0;k<properties.fishes.length;k++){
							var fishInWeb =properties.fishes[k];
							var fishWebRx = fishInWeb.x-bullet.x;
							var fishWebRy = fishInWeb.y-bullet.y;
							var fishWebS = Math.sqrt(fishWebRx*fishWebRx+fishWebRy*fishWebRy);
							if(fishWebS<=bullet.bulletWidth/2+fishInWeb.width/3){
								var chances = fishInWeb.beCatchedWeight*fishInWeb.beCatchedWeight+bullet.getFishChances*bullet.getFishChances;
								//alert(chances);
								if(chances>=Math.random()*800){
									fishInWeb.moveFlag=false;
									fishInWeb.stopMove();
									index.showAddMoney(fishInWeb.x,fishInWeb.y,fishInWeb.price);
									properties.gold+=fishInWeb.price;
									properties.fishes.splice(k, 1);
								}
							}
						}
						bullet.webRemove();
						properties.bullets.splice(j, 1);
					}
				}
			}

	}

};
index.init();