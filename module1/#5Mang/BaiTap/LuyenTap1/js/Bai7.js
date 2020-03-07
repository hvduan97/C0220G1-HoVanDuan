let arang=new Array(10);
let k=0;
while (k<10){
    arang[k]=parseInt(prompt('nhập arang['+k+']'));
    k++;
}
let enterV=parseInt(prompt('Nhập V: '));
while (arang.indexOf(enterV)>=0){
    if (arang.indexOf(enterV)>=0){
        for (let x=(arang.indexOf(enterV)+1);x<arang.length;x++){
            arang[x-1]=arang[x];
        }
        arang.pop();
    }
}
for (let j = 0; j < arang.length; j++) {
    document.write("arang[" + j + "] = " + arang[j] + "<br>");
}
