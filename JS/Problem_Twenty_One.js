/*
 Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
 as the input parameter and will return the sum of the odd numbers.
*/

let theArray = [5, 7, 8, 10, 45, 30];

function findOddNumber(numbers){
  const oddNumArray = [];
  for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    if(element % 2 !== 0){
      oddNumArray.push(element);
    }
  }
  return oddNumArray;
}
const getOddArray = findOddNumber(theArray);
console.log(getOddArray);

function findOddSum(numbers){

  let sum  = 0;
  for(let i = 0; i < numbers.length; i++){
   sum = sum + numbers[i];
  }
  return sum;
 }
 const getOddSum = findOddSum(getOddArray);
 console.log(getOddSum);