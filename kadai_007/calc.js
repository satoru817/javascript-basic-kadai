let num = Math.floor(Math.PI**Math.E);
// let num =15;
let r3 = num%3;
let r5 = num%5;

if(r3**2+r5**3 === 0){
  console.log(`3と5の倍数です`)
}else if(r5 === 0){
  console.log(`5の倍数です。`);
}else if(r3 === 0){
  console.log(`3の倍数です`)
}else{
  console.log(num);
}