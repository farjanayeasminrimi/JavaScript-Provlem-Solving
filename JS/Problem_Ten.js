//  Write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(int1, int2, int3){
 let sum = int1 + int2 + int3;
 let avgNumber = sum / 3;
 return avgNumber; 
}
let getAvgNum= make_avg(20, 30, 19);
console.log(getAvgNum);
