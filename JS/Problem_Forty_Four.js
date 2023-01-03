/*
 You are given two array. Now add all the elements of those individual array and return the output. 
 Complete the task using for loop & array.reduce();
*/
// ============== for loop ==============================
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(number of numbers){
 sum += number;
}
console.log(sum);

// ======================== array.reduce ==============================
const naturalNumbers = [1, 2, 3, 4, 5, 5];
const sumOfNumbers = naturalNumbers.reduce((previousValue , currentValue) => previousValue + currentValue, 0);
console.log(sumOfNumbers);