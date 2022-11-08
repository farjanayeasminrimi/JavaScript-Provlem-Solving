/*
  Write a function that will reverse words in a sentence
*/

function reverseWords(sentence){
  const textSplit = sentence.split(' ');
  let reversed = [];
  for(let i = textSplit.length - 1; i >= 0; i--){
    const getValue = textSplit[i];
    reversed.push(getValue);
  }
  reversed = textSplit.join(' ');
  return reversed;
}
const theText = 'I love myself';
const getAns = reverseWords(theText);
console.log(getAns);