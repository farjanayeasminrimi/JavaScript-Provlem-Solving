/*
 Write a arrow function that will take two array as two parameter. Now combined them and then assign in a new array. Find the max number of the new array and return it.
*/
const arrayOne = [12, 45, 79, 23, 78, 89];
const arrayTwo = [32, 53, 23, 78, 90, 99];
const findMax = (arrayOne, arrayTwo) => {
  const combinedArray = [...arrayOne, ...arrayTwo]
  const maxNumber = Math.max(...combinedArray);
  return maxNumber;
}
const result = findMax(arrayOne, arrayTwo);
console.log(result);