/*
 Create the multiplication table of 13.
*/

function multiplication(number){

  for(let i = 1; i <= 10; i++){
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`) ;
  }
}
multiplication(13);