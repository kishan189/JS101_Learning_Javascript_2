let arr=[1,2,3,4,5,6];
let odd_count=0;
let even_count=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]%2===0){
    even_count++;
  }
  else{
    odd_count++;
  }
}
  console.log("even_count",even_count,"odd_count",odd_count)
