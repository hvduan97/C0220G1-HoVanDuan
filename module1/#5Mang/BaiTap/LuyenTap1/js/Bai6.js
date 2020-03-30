let v=parseInt(prompt('Nhập phần tử cần tìm kiếm'));
let arr=new Array(10);
let k=0;
let check=false;
while(k<10){
    arr[k]=parseInt(prompt('Nhập phần tử arr['+k+']'));
    k++;
}
for(let i=0;i<arr.length;i++){
    if(arr[i]==v){
        check=true;
    }
}
if(check==true){
    alert('V có trong mảng')
}
else{
    alert('V không có trong mảng');
}