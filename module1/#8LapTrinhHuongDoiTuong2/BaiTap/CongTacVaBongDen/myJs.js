class Light{
    constructor(status){
        this.status=status;
    }
    lighting(){
        if(this.status==true){
            console.log('Đèn sáng');
        }
        else{
            console.log('Đèn tắt');
        }
    }
}
class SwitchElectric{
    constructor(status){
        this.status=status;
    }
    getSwitch(){
        return this.status;
    }    
}
let switchButton=new SwitchElectric(true);
let light=new Light(switchButton.getSwitch());
light.lighting();