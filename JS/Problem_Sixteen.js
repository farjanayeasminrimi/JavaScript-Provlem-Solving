/*
 Write a function named fullName which will take two parameter called firstName and lastName then the function will concatenate those two parameter and will return full name. 
*/

function fullName(firstName, lastName){
 let concat = firstName + ' ' + lastName;
 return concat;
}
let firstNam = 'Farjana Yeasmin';
let lastNam = 'Rimi';
const getAns = fullName(firstNam, lastNam);
console.log(getAns);