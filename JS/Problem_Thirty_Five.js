/*
  Write a function named myBesties that will take an array as the parameter which will contain your all best friend names. Now return the largest bestu's  name from the array.
*/

const myBesties = ['Chakina', 'Jarina', 'Moyana', 'Noyona', 'Moyna akther', 'Jorina Bibi'];

function findLargestName(myBesties){
  let largestName = myBesties[0];
  for(let i = 0; i < myBesties.length; i++){
    const bestu = myBesties[i];
    if(bestu.length > largestName.length){
      largestName = bestu;
    }
  }
  return largestName;
}
const getAns = findLargestName(myBesties);
console.log(getAns);