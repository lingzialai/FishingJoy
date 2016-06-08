/**
 * Created by lingzi on 2015/12/17.
 */

function Cannon(cannonWidth,cannonHeight,cannonImgArr,cannonClassName,consumeGold){

    this.cannonWidth = cannonWidth;
    this.cannonHeight = cannonHeight;
    this.cannonImgArr = cannonImgArr;
    this.cannonClassName = cannonClassName;
    this.consumeGold = consumeGold;
    this.cannonEle = undefined;
    this.translateX = undefined;
    this.translateY = undefined;
    this.rotation = 0;
}

Cannon.prototype.init = function(x,y){
    this.cannonEle = document.createElement("div");
    this.cannonEle.setAttribute("class", this.cannonClassName);
    document.getElementById("container").appendChild(this.cannonEle);
    this.translateX = x - this.cannonWidth/2;
    this.translateY = y - this.cannonHeight/2;
    this.cannonEle.style.transform = "translate(" + this.translateX + "px, " + this.translateY + "px)";
};

Cannon.prototype.ChangeDegree = function(k1,obj){
    var rotation = -(360*Math.atan(k1)/(2*Math.PI));
    var translation = "translate("+(properties.cannonCenter.x-this.cannonWidth/2)+"px,"+(properties.cannonCenter.y-this.cannonHeight/2)+"px)";
    this.cannonEle.style.transform=translation+" rotate(0deg)";
    this.cannonEle.style.transform=translation+" rotate("+rotation+"deg)";

    var cannonImgCounter=0;
    var changeCannonImg=setInterval(function(){
        obj.cannonEle.style.backgroundPositionY = obj.cannonImgArr[cannonImgCounter]+"px";
        cannonImgCounter++;
        if(cannonImgCounter==obj.cannonImgArr.length-1){
            clearInterval(changeCannonImg);
        }
    },20);

    this.cannonFire(rotation,k1);
};

Cannon.prototype.cannonFire = function(rotation,k1){

    var bulletCategory = properties.bulletsCategory[properties.cannonNumber];


    var bullet = new Bullet(bulletCategory.width,bulletCategory.height,bulletCategory.speed,bulletCategory.className,bulletCategory.getFishChances);
    var s = bullet.bulletHeight/2+2+this.cannonHeight/2;
    bullet.x= properties.cannonCenter.x-s*k1*Math.sqrt(1/(1+k1*k1));
    bullet.y= properties.cannonCenter.y-s*Math.sqrt(1/(1+k1*k1));
    bullet.translateX =bullet.x - bullet.bulletWidth/2;
    bullet.translateY =bullet.y - bullet.bulletHeight/2;
    bullet.speedX = bullet.speed*k1*Math.sqrt(1/(1+k1*k1));
    bullet.speedY = bullet.speed*Math.sqrt(1/(1+k1*k1));

    bullet.bulletEle = document.createElement("div");
    bullet.bulletEle.setAttribute("class",bullet.className);
    document.getElementById("container").appendChild(bullet.bulletEle);
    bullet.bulletEle.style.transform = "translate("+bullet.translateX+"px,"+bullet.translateY+"px)"+" rotate("+rotation+"deg)";
    properties.bullets.push(bullet);

    setInterval(function(){
        if(bullet.moveFlag==true){
            bullet.translateX -= bullet.speedX;
            bullet.translateY -= bullet.speedY;

            bullet.x = bullet.translateX+bullet.bulletWidth/2;
            bullet.y = bullet.translateY+bullet.bulletHeight/2;

            bullet.bulletEle.style.transform = "translate("+bullet.translateX+"px,"+bullet.translateY+"px)"+" rotate("+rotation+"deg)";
        }
    },100);
};

Cannon.prototype.removeCannon = function() {
    document.getElementById("container").removeChild(this.cannonEle);
};