let arr=new Array(10);
// let arr=[10];
let i;
let sum=0;
let count=0;
for (i=0;i<arr.length;i++){
    arr[i]=parseInt(prompt('Nhập '+'arr['+i+']'));
    // alert(arr[i]);
}
for (j=0;j<arr.length;j++){
    if (arr[j]>=10){
        sum+=arr[j];
        count++;
    }
}
alert(arr);
alert('mảng có '+count+' giá trị lớn hơn hoặc bằng 10'+' và có tổng là: '+sum);