let arr1=new Array(10);
let arr2=new Array(10);
let arr3=new Array(20);
let k=0;
let g=0;
while(k<10){
    arr1[k]=parseInt(prompt('Nhập arr['+k+']'));
    k++;
}
while(g<10){
    arr2[g]=parseInt(prompt('Nhập arr['+g+']'));
    g++;
}
arr3=arr1.concat(arr2);
alert(arr3);