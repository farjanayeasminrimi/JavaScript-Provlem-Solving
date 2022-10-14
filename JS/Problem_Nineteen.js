/*
 Write a function which will convert inches to feet and kilometer to meter also miles to kilometer. 
*/
// inches to feet
function inchesToFeet(inches){
  const inchesConvert = inches / 12;
  return inchesConvert;
}
const getInchesResult = inchesToFeet(144);
console.log(getInchesResult);

// kilometer to meter
function kilometerToMeter(kilometer){
  const meterConvert = kilometer * 1000;
  return meterConvert;
}
const getMeterResult = kilometerToMeter(189);
console.log(getMeterResult);

// miles to kilometer. 
function mileToKilometer(miles){
  const milesConverter = miles * 1.60934;
  return mileToKilometer
}
const getKilometerResult = kilometerToMeter(674);
console.log(getKilometerResult);