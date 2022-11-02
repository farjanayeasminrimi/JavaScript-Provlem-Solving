/*
  Write a function that will reverse a string
*/
function reverseString(str){
  let getAll = ' ';
  for(let i = str.length - 1; i >= 0; i--){
    const getElement = str[i];
    getAll += getElement;
  }
  return getAll;
}
const theString = 'I am Arjuna';
const getResult = reverseString(theString);
console.log(getResult);