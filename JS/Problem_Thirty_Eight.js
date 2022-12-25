/*
 Write a arrow function that will take two parameters. One parameter will be a default parameter. Add those parameter and then return the result.
*/

const add = (num1, num2 = 5) => {
   const added = num1 + num2;
   return added;
}
const result = add(15);
console.log(result);