function max(x,y){
  if(x > y){
    return x;
  } else{
    return y;
  }
}
const maior = max(23,96);
console.log(maior);
//-------------------------------------------
function max2(x,y){
  if(x > y) return x;
  return y;
}
console.log(max2(4,55));
//-------------------------------------------
function max3(x,y){
  return x > y ? x : y;
}
console.log(max3(2,44));
//-------------------------------------------
const max4 = (x,y) => {
  return x > y ? x : y;
}
console.log(max4(12,32));
//-------------------------------------------
const max5 = (x,y) => x > y ? x : y;
console.log(max5(1,2));
