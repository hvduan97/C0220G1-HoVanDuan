let arr=new Array(10);
let k=0;
while (k<10){
    arr[k]=parseInt(prompt('nhập a['+k+']'));
    k++;
}
let enterV=parseInt(prompt('Nhập V: '));
// for (let i=0;i<arr.length;i++){
    if (arr.indexOf(enterV,0)){
        alert('V in Array');
    }
    else {
        alert('V not in Array');
    }
// }