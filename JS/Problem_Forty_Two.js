/*
 Take an array of odd numbers. Now convert this array into an array of even numbers. 
 odd Array = [1, 3, 5, 7, 9];
 even Array will be = [2, 4, 6, 8, 19]
*/

const oddNumbers = [1, 3, 5, 7, 9];
function convertToEven(){
  const evenNumbers = [];
  for (oddNumber of oddNumbers) {
    const evenNumber = oddNumber + 1;
    evenNumbers.push(evenNumber);
  }
  return evenNumbers;
}
const theResult = convertToEven();
console.log(theResult);

// ======= OR =======
const odd_Numbers = [1, 3, 5, 7, 9];
const even_Numbers = odd_Numbers.map(n => n + 1);
console.log(even_Numbers);