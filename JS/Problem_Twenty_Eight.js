/*
 Write a function to get the highest number in an array.
*/
function maxInArray(numbers){
 let first_height = numbers[0];
 for(let i = 0; i < numbers.length; i++){
  const index = i;
  const getElement = numbers[index];
  if(getElement > first_height){
    first_height = getElement;
  }
 }
 return first_height;
}
const heights = [299, 294, 322, 923]; 
const getAns = maxInArray(heights);
console.log(getAns);