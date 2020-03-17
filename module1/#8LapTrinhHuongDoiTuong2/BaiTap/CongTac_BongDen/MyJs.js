class SwitchButton {
    constructor(status){
        this.status = status;
    }
    getStatus(){
        return this.status;
    }
    setStatus(newStatus){
        this.status = newStatus;
    }
    turnOn_turnOff(){
        this.status = !this.status;
    }
}

class Light {
    constructor(switchButton){
        this.switchButton = switchButton;
    }
    onLight(){
        if (this.switchButton.getStatus() === true){
            document.getElementById("bongden").src = "img/Den_Sang.gif";
            document.getElementById("result").innerHTML = "Bong den da bat";
        }else {
            document.getElementById("bongden").src = "img/Den_Tat.gif";
            document.getElementById("result").innerHTML = "Bong den da tat";
        }
    }
}

let switchButton = new SwitchButton(false);
let lamp = new Light(switchButton);

function turnOn_TurnOff(){
    switchButton.turnOn_turnOff();
    lamp.onLight();
}
