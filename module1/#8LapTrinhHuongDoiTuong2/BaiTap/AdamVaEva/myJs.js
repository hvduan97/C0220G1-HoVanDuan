class Apple {
    constructor(weight) {
        this.weight=weight;
    }
    getWeight(){
        return this.weight;
    }
    decrease(){
        return this.weight--;
    }
    isEmpty(){
        if (this.weight>0){
            return true;
        }
        else {
            return false;
        }
    }
}
class Human {
    constructor(name,gender,weight) {
        this.name=name;
        this.gender=gender;
        this.weight=weight;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight=weight;
    }
    say(){
        console.log('Hello World');
    }
    checkApple(){
        this.
    }
    eat(){
        if (this.checkApple()){
            this.weight++;
            Apple.decrease();
        }
        else {
            console.log('Hết táo');
        }
    }

}
let apple=new Apple(10);
let human=new Human('Duan','male',20);
human.eat();
console.log('cân nặng của táo '+apple.getWeight()+' Cân người: '+ human.getWeight());