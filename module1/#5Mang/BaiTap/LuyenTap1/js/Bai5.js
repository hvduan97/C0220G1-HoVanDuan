let arr=new Array(10);
let k=0;
let count=0;
while (k<10){
    arr[k]=parseInt(prompt('nhập arr['+k+']'));
    k++;
}
for (let i=0;i<arr.length;i++){
    if (arr[i]<0){
        count++
    }
}
document.write(count);