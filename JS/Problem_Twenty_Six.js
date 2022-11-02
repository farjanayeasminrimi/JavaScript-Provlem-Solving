/*
 Write a function that will take 3 numbers and return the max number.
 Do it by using if-else and math.min or math.max 
*/

//============== MAX NUMBER =================================
function findMax(){
  const num1 = 3;
  const num2  = 4 ; 
  const num3 = 1;

  if(num1 > num2 && num1 > num3){
    return num1 + ' is the largest number';
  }
  else if(num2 > num1 && num2 > num3){
    return num2 + ' is the largest number';
  }
  else{
    return num3 + ' is the largest number';
  }
}
const getMax = findMax();
console.log(getMax);

function findMaxNum(){
  const num1 = 3;
  const num2  = 9 ; 
  const num3 = 1;
  const getMax = Math.max(num1, num2, num3);
  return getMax + ' is the largest number';
}
const getMaxNum = findMaxNum();
console.log(getMaxNum);

//============== MIN NUMBER =================================
function findMin(){
  const num1 = 443;
  const num2  = 457 ; 
  const num3 = 122;

  if(num1 < num2 && num1 < num3){
    return num1 + ' is the smallest number';
  }
  else if(num2 < num1 && num2 < num3){
    return num2 + ' is the smallest number';
  }
  else{
    return num3 + ' is the smallest number';
  }
}
const getMin = findMin();
console.log(getMin);

function findMinNum(){
  const num1 = 322;
  const num2  = 639 ; 
  const num3 = -199;
  const getMin = Math.min(num1, num2, num3);
  return getMin + ' is the smallest number';
}
const getMinNum = findMinNum();
console.log(getMinNum);
