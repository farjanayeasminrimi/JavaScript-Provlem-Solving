/*
 You are given an array. Now return all the elements which are divisible by 10. Do this by using filter and find method.
*/
const numbers = [10, 53, 39, 70, 80, 45, 67];
// ========== Filter Method ===========
const divisibleNumbers = numbers.filter(n => n % 10 === 0);
console.log(divisibleNumbers);
// ========== Find Method ===========
const findDivisible = numbers.find(n => n % 10 === 0);
console.log(findDivisible);