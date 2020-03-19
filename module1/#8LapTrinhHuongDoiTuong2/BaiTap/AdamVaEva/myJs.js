class Apple {
    constructor(weight) {        
        this.appleWeight = weight;
    }

    getWeight() {
        return this.appleWeight;
    }

    decrease() {
        this.appleWeight--;
        if (this.appleWeight<0){
            this.empty();
        }
        return this.appleWeight;
    }

    empty() {
        this.appleWeight = 0;
    }
}
class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;

    }
    say() {
        console.log("Hello");
    }
    eat(appleWeight) {
        this.appleWeight = appleWeight;
        if (this.appleWeight >= 0) {
            this.weight++;
        }
    }
    getValueApple(appleWeight) {
        this.appleWeight = appleWeight;
        return this.appleWeight;
    }
    getName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }

    getWeight() {
        return this.weight;
    }
}
let tao = new Apple(10);
let nguoi1 = new Human("Adam", "Man", 60);
let nguoi2 = new Human("Eva", "Woman", 40);
while( tao.appleWeight > 0){
    nguoi1.eat(tao.decrease());
    nguoi2.eat(tao.decrease());
    console.log("khối lượng Adam lúc này là: " + nguoi1.getWeight());
    console.log("khối lượng Eva lúc này là : " + nguoi2.getWeight());
    console.log("khối lượng táo còn lại: " + tao.getWeight());
}