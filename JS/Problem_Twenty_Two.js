/*
 Write a function which will take the array [2023,2024,2025,2028,2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.
*/

const years = [2008, 2016, 2023, 2024, 2025, 2028, 2030, 2033];
function isLeapYear(year){
  const theArray = [];
  for(let i = 0; i < year.length; i++){
    let index = year[i];
    if(index % 4 === 0 && index % 100 !== 0 && index % 400 !== 0 || index % 400 === 0 && index % 100 === 0){
      theArray.push(index);
    }
  }
  return theArray;
}
let getAns = isLeapYear(years);
console.log(getAns);