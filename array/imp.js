let arr=[10,20,13,20];
for(let i=0;i<arr.length;i++){
  let a=[];
  
  for(let j=i;j<4;j++){
  a.push(arr[j]);
   
     // console.log(a);
  
    let sum=0;
    let count=0;
    for(let k=0;k<a.length;k++){
      
      sum=sum+a[k];
     
    }
    console.log(sum)
  }
}
   
    let max=-Infinity;
   let sum1=[10,30,43,63,20,33,53,13,33,20]
    for(let i=0;i<sum1.length;i++){
      if(sum1[i]>max){
        max=sum1[i];
      }
   }
      console.log("max",max)
let sum2=[10,30,43,63,20,33,53,13,33,20]
      let count2=0;
      let count3=0;
for(let i=0;i<sum2.length;i++){
      for(let j=1;j<=max;j++){
        if(sum2[i]%j==0 ){
         count2++;
        }
        if(count2==2){
          count3++;
        }
      }
}
     
        console.log(count3);
      