let ar=[1,3,2,-9,6,-2,1];
let a=[];
for(let i=0;i<ar.length;i++){
  if(ar[i]<0){
    ar[i]=0;
  }
  else {
    ar[i]=1;
  }

  a.push(ar[i]);
}
  console.log(a)
