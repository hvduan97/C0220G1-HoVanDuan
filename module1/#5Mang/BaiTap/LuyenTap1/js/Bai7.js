let arang=new Array(10);
let k=0;
while (k<10){
    arang[k]=parseInt(prompt('nhập arang['+k+']'));
    k++;
}
let enterV=parseInt(prompt('Nhập V: '));
let index;
for(let i=0;i<arang.length;i++){
    if(arang[i]==enterV){
        for(let j=i;j<arang.length;j++){
            arang[j]=arang[j+1];
        }
        arang.pop();
    }
}
alert(arang);
