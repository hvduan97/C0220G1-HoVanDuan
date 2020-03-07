let arr=new Array(10);
let k=0,i,j=0;
let sum=0;
while (k<10){
    arr[k]=parseInt(prompt('arr['+k+']'));
    // k++;
    sum+=arr[k];
    k++;
}
let max=arr[0];
for (i=1;i<arr.length;i++){
    if (arr[i]>max){
        max=arr[i];
        j=i;
    }
}
document.write('arr['+arr+']'+'<br/>');
document.write('Mảng có giá trị lớn nhất là: '+max+' tại vị trí thứ '+j+' và có giá trị trung bình là '+sum/arr.length);