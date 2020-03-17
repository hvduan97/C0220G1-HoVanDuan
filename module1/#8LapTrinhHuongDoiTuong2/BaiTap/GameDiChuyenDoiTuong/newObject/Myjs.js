let temp=true;
let temp1=true;
// let speed=50;
class pikachu{
    constructor(speed,top,left,bottom,right,size,image) {
        this.top=top;
        this.left=left;
        this.bottom=bottom;
        this.right=right;
        this.size=size;
        this.image=image;
        this.speed=speed;
    }
    getObjectPikachu(){
        return '<img width="'+this.size+'"'+
            'height="'+this.size+'"'+' src="' + this.image +'"'+
            'style="top:'+ this.top+'px; left:'+ this.left+'px;right:'+ this.right+
            'px;bottom:'+this.bottom+'px;position: absolute;"/>';
    }
    /*moveRight(){
        this.left+=20;
    }
    moveDown(){
        this.left=window.innerWidth-this.size;
        this.top+=20;
    }
    moveLeft(){
        this.left-=20;
    }
    moveUp(){
        this.top-=20;
    }*/
    moveAround() {
        let width = window.innerWidth - this.size;
        let height = window.innerHeight - this.size;
        if (this.left < width && temp ) {
            this.left += this.speed;
        } else if (this.top < height && temp1 ) {
            this.top += this.speed;
            console.log("TOP+ : "+this.top);
            temp=false;
        } else if (this.top > height && this.left > 0) {
            this.left -= this.speed;
            console.log("LEFT-: "+ this.left);
            temp1=false;
            //  this.top -= this.speed;
        } else if(this.top >0){
            this.top -= this.speed;
            console.log("TOP- : "+this.top);
        } else {
            temp1=true;
            temp=true;
        }
    }
}
let Pikachu=new pikachu(20,0,0,0,0,200,'pikachu.png');
// Di chuyển sang phải
/*function runToRight() {
    Pikachu.left=0;
    if (Pikachu.left<window.innerWidth-Pikachu.size){
        Pikachu.moveRight();
    }
    document.getElementById('game').innerHTML=Pikachu.getObjectPikachu();
    setTimeout(runToRight,500);
}*/
// Di chuyển xuống dưới
/*function runDown() {
    if ((Pikachu.top<window.innerHeight-Pikachu.size)){
        Pikachu.moveDown();
    }
    document.getElementById('game').innerHTML=Pikachu.getObjectPikachu();
    setTimeout(runDown,500);
}*/
// Di chuyển sang trái
/*Pikachu.top=window.innerHeight-Pikachu.size;
Pikachu.left=window.innerWidth-Pikachu.size;
function runLeft() {
    if ((Pikachu.left>0)){
        Pikachu.moveLeft();
    }
    document.getElementById('game').innerHTML=Pikachu.getObjectPikachu();
    setTimeout(runLeft,500);
}*/
// Di chuyển lên
/*Pikachu.left=0;
Pikachu.top=window.innerHeight-Pikachu.size;
function runUp() {
    if ((Pikachu.left<win)){
        Pikachu.moveUp();
    }
    document.getElementById('game').innerHTML=Pikachu.getObjectPikachu();
    setTimeout(runUp,500);
}*/
// Di chuyển vong quanh
function start() {
    Pikachu.moveAround();
    document.getElementById('game').innerHTML = Pikachu.getObjectPikachu();
    setTimeout(start, 500)
}
// runToRight();
// runDown();
// runLeft();
// runUp();
start();

