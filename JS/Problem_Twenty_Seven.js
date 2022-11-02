/*
 Write a function that will take 3 parameter and will return the min number    
 Do it by using if-else and math.min or math.max 
*/
// ================== MAX NUMBER ===================================
function findMax(num1, num2, num3){
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
const getMax = findMax(223, 33, 934);
console.log(getMax);

function findMaxNum(num1, num2, num3){
  const getMax = Math.max(num1, num2, num3);
  return getMax + ' is the largest number';
}
const getMaxNum = findMaxNum(967, 338, 634);
console.log(getMaxNum);

// ================== MIN NUMBER ===================================
function findMin(num1, num2, num3){
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
const getMin = findMin(223, 33, 934);
console.log(getMin);

function findMinNum(num1, num2, num3){
  const getMin = Math.min(num1, num2, num3);
  return getMin + ' is the smallest number';
}
const getMinNum = findMinNum(967, 338, 634);
console.log(getMinNum);