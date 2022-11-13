/*
 Write a JavaScript function to find the area of a triangle where lengths of the base is 5 and height is 13.
*/

function areaOfTriangle(b, h){
  const area = 1/2 * (b * h);
  return area;
}
const getAns = areaOfTriangle(5, 13);
console.log(getAns);