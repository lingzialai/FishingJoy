/**
 * Created by Meteor on 2015/12/18.
 */
function Bullet(bulletWidth,bulletHeight,speed,className,getFishChances){
    this.bulletEle = undefined;
    this.bulletWidth = bulletWidth;
    this.bulletHeight = bulletHeight;
    this.className = className;
    this.speed = speed;
    this.speedX = 0;
    this.speedY = 0;
    this.moveFlag = true;
    this.getFishChances = getFishChances;

    /**xÖá×ø±ê*/
    this.x = 0;
    /**yÖá×ø±ê*/
    this.y = 0;
    this.translateX = 0;
    this.translateY = 0;
}

Bullet.prototype.remove = function() {
    document.getElementById("container").removeChild(this.bulletEle);
}

Bullet.prototype.webRemove = function(){
    var i = 0;
    var web = this;
    var timer= setInterval(function(){
        i++;
        if(i==20){
            web.remove();
            clearInterval(timer);
        }
    },50);


}