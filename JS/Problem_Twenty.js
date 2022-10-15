/*
 Write a function that will take hour as the input parameter and will
 convert it into minutes and will return the result in minutes.
*/
function hourToMinutes(hours){
 const convertMinute = hours * 60;
 return convertMinute;
}
const getResult = hourToMinutes(3);
console.log(getResult);