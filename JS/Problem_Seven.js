/*
 You are given three numbers 13, 79, and 45. Write a program that will print the
 largest number using if-else.
*/
let numberOne = 13;
let numberTwo = 79;
let numberThree = 45;

if (numberOne > numberTwo && numberOne > numberThree) {
  console.log('Number 13 is the largest number');
}
else if (numberTwo > numberOne && numberTwo > numberThree) {
  console.log('Number 79 is the largest number');
}
else{
 console.log('Number 45 is the largest number');
}