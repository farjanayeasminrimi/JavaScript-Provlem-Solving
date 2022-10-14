/*
 Write a function called odd_even() which takes an integer value and tells       whether this
 value is even or odd. You need to do it in 4 ways:
 ● Has return + Has parameter
 ● No return + Has parameter 
 ● No return + No parameter 
 ● Has return + No parameter 
*/

// ● No return + Has parameter 
function odd_even(intNumber){
  if(intNumber % 2 === 0){
    console.log('this is an even number');
  }
  else{
    console.log('this is an odd number')
  }
}
odd_even(8);

// ● Has return + Has parameter
function even_odd(intNum){
  if(intNum % 2 === 0){
    return 'this is an even number';
  }
  else{
    return 'this is an odd number'
  }
}
let getAns = even_odd(2);
console.log(getAns);

//  ● No return + No parameter 
const number = 34;
function even$Odd(){
  if(number % 2 === 0){
    console.log('this is even');
  }
  else{
    console.log('this is odd');
  }
}
even$Odd();

// ● Has return + No parameter 

const myNum = 39;
function Odd$Even(){
  if(myNum % 2 === 0){
    return 'this is even';
  }
  else{
    return'this is odd';
  }
}
let getValue = Odd$Even();
console.log(getValue);
