// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(intArray, arraySize){
 let sum =0;
 for(let i = 0; i < arraySize; i++){
  let arrayIndex = intArray[i];
  sum += arrayIndex;
 }
 let avg = sum / arraySize;
 return avg;
}
let theIntArray = [23, 45, 33, 89, 30, 19, 39];
let intArraySize = theIntArray.length;
let getAvg = make_avg(theIntArray, intArraySize);
let avgInFixed = getAvg.toFixed(2);
let avgInFloat = parseFloat(avgInFixed);
console.log(avgInFloat);