/*
 Write a function that will say you how much marks you got in your exam out of 100
*/
function grade(totalNumber){
  
 if (totalNumber >= 80) {
  return 'Your grade is A+';
 } 
 else if (totalNumber >= 70){
  return 'Your grade is A';
 }
 else if (totalNumber >= 60){
  return 'Your grade is A-';
 }
 else if (totalNumber >= 50){
  return 'Your grade is B';
 }
 else if (totalNumber >= 40){
  return 'Your grade is C';
 }
 else{
  return 'Your grade is F';
 }
}
const knowGrade = grade(90);
console.log(knowGrade);