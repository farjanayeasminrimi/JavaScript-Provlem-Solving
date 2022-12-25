// Write an arrow function that will take three parameters and will multiply the parameters, then return the result.

const doMultiply = (num1, num2, num3) => {
   const multipleValue = num1 * num2 * num3;
   return multipleValue;
}
const result = doMultiply(2, 2, 2);
console.log(result);