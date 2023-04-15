let a=[1,2,4,3,5,6,12,10,7];
let count=0;
let sum=0;
for(let i=0;i<a.length;i++){
  if(a[i]%2==0){
    sum=sum+a[i];
    count++;
  }
}
console.log(sum/count);