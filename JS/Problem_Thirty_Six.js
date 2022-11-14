/*
 Write a function that will take an array of some positive and negative numbers. Now check those numbers through a loop. If those numbers are positive numbers then push them into another array. Else if those numbers are negative then stop the loop and return only the positive numbers.
*/
const numbers = [13, 5, 33, 95, 44, -987, 24, 98];
function findPositiveNumber(numbers){
 const positiveNumber = []; 
 for(let i = 0; i < numbers.length; i++){
  const number = numbers[i];
  if(number >= 0){
    positiveNumber.push(number);
  }
  else{
    break;
  }
 }
 return positiveNumber;
}
const getAns = findPositiveNumber(numbers);
console.log(getAns);