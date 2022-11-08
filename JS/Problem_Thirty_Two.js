/*
 Give a number 'n', find the first 'n' elements of Fibonacci sequence.
 The first two numbers in the sequence are 0 and 1.
*/

let fiboNum = [0, 1];
for(let i = 2; i <= 20; i++){
  fiboNum[i]= fiboNum[i-1] + fiboNum[i-2];
}
console.log(fiboNum);