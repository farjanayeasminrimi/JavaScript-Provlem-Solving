/*
 Write a function to get the lowest number in an array.
*/
function minInArray(numbers){
  let lowestNum = numbers[0];
  for(let i = 0; i < numbers.length; i++){
   const index = i;
   const getElement = numbers[index];
   if(getElement < lowestNum){
     lowestNum = getElement;
   }
  }
  return lowestNum;
 }
 const heights = [299, 84, 322, 923]; 
 const getAns = minInArray(heights);
 console.log(getAns);