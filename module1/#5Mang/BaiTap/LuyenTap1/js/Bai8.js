let arr=new Array(10);
let k=0;
while(k<10){
    arr[k]=parseInt(prompt('Phần tử arr['+k+']: '));
    k++;
}
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
alert(arr);