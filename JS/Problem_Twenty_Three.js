/*
 Write a function that will take celsius as a parameter and after calculation, it will return the converter value of Celsius to Fahrenheit. 
*/

function convert(celsius){
  let convertValue = (celsius * 1.8) + 32;
  return convertValue;
}
let getAns = convert(39);
console.log(getAns)