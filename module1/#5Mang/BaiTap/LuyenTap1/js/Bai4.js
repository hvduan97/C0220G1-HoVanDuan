let arr=new Array(10);
let k=0;
while (k<10){
    arr[k]=parseInt(prompt('Nhập a['+k+']'));
    k++;
}
document.write('arr['+arr+']');
let first=0;
let last=arr.length-1;
while (first<last){
    let changeE=arr[first];
    arr[first]=arr[last];
    arr[last]=changeE;
    first++;
    last--;
}
document.write('['+arr+']');