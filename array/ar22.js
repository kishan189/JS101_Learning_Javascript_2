let lower_case="t"
let ar1=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let ar2=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for(let i=0;i<ar1.length;i++){
  if(lower_case==ar1[i]){
    lower_case=ar2[i];
  }
}
console.log(lower_case);