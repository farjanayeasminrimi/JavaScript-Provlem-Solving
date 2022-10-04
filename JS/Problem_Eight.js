/*
 You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
 Isosceles => two sides are equal
*/

let sideOne = 9;
let sideTwo = 8;
let sideThree = 9;

if(sideOne == sideTwo || sideOne == sideThree || sideTwo== sideThree){
 console.log('This triangle is Isosceles');
}
else{
  console.log('This triangle is not Isosceles');
}