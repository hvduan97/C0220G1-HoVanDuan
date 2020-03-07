let j=0,i,k=0;
let arr=new Array(10);
while (k<10){
    arr[k]=parseInt(prompt('Nhập '+'a['+k+']'));
    k++;
}
document.write('arr['+arr+']'+'<br/>');
max=arr[0];
for (i=1;i<arr.length;i++){
    if (arr[i]>max){
        max=arr[i];
        j=i;
    }
}
document.write('Giá trị max là '+max+' tại ví trí '+j);