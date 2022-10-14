/*
 Write a object named pizza.like this :
 const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
 Now print pepperoni.
}
*/

const pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish',
  serves: 2
}
const getIndex = pizza['toppings'].indexOf('pepperoni');
const printIndex = pizza.toppings[2]
console.log(getIndex);
console.log(printIndex);