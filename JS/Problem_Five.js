/*
 You are given an array:

   var fruits = ['Apple', 'Banana', 'Orange'];

   a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
   b) Remove ‘Orange’ and add ‘Watermelon’.

*/

var fruits = ['Apple', 'Banana', 'Orange'];
var searchIndex = fruits.indexOf('Banana');
console.log(searchIndex);
fruits[1] = 'Mango';
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);
