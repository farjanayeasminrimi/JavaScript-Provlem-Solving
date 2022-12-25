/*
 Write a arrow function that will take an array where the array elements will be the name of your best friends.
 Now check if the length of each element is even, push them into a new array and then return the result.
*/
const names = ['Aura Khatun', 'Raha Islam', 'Rahi Chowdury', 'Asif Akbar', 'Xing Fei', 'Mahabuba Khayer'];
const isEven = array => {
  const evenName = [];
  for(const name of array){
    if(name.length % 2 === 0){
      evenName.push(name);
    }
  }
  return evenName;
}
const result = isEven(names);
console.log(result);