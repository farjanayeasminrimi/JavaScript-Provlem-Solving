/*
 Write a arrow function that will take an array of some numbers as parameter.
 Now square each element of the array. Calculate the sum of the squared element. Then return the average of the sum.
*/
const numbers = [12, 45, 67, 39, 89, 56];
const doAverage = numbers => {
  const powerNumbers = [];
  for(number of numbers){
    const power = Math.pow(number, 2);
    powerNumbers.push(power);
  }
  let sum = 0;
  for(const powerNumber of powerNumbers){
    sum += powerNumber;
  }
  const average = sum / powerNumbers.length;
  return average;
}
const result = doAverage(numbers);
console.log(result);