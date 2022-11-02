/*
 Write a function to get the highest number in an array.
*/
function maxInArray(numbers){
 let highestNum = numbers[0];
 for(let i = 0; i < numbers.length; i++){
  const index = i;
  const getElement = numbers[index];
  if(getElement > highestNum){
    highestNum = getElement;
  }
 }
 return highestNum;
}
const heights = [299, 294, 322, 923]; 
const getAns = maxInArray(heights);
console.log(getAns);