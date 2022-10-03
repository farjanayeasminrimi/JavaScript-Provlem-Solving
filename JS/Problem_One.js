/*
 Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
 help Harry calculate how much money the shopkeeper will return.
*/

let givenMoney = 1000;
let applePrice = 160;
let orangePrice = 120;

let totalCost = applePrice + orangePrice;

let returnMoney = givenMoney - totalCost;

console.log(returnMoney);