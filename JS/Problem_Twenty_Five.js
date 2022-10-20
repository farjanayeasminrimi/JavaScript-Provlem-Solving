/*
 Write a function that will take p, t and r as parameters and return the value of the simple interest.
 Suppose:
 p = 30000;
 t = 1;
 r = 7;
*/
function interestCalculation(p, t, r){
  let SI = (p * t * r) / 100;
  return SI;
}
const getAns = interestCalculation(30000, 1, 7);
console.log(getAns);