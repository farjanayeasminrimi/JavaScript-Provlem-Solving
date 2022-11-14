/*
 Write a function named paperRequirement that will take three-parameter. Parameters should be like these: firstBookCopy,secBookCopy, thirdBookCopy.
 Those parameters mean how many copies you want. When you call the function, it will return how many paper are needed for those books.
*/

function paperRequirement(firstBookQnt, secBookQnt, thirdBookQnt) {
  const firstBookPage = 100;
  const secBookPage = 200;
  const thirdBookPage = 300;

  const firstBookCopy = firstBookPage * firstBookQnt;
  const secBookCopy = secBookPage * secBookQnt;
  const thirdBookCopy = thirdBookPage * thirdBookQnt;

  const totalPageNeeded = firstBookCopy + secBookCopy + thirdBookCopy;
  return totalPageNeeded;
}
const getAns = paperRequirement(2, 3, 5);
console.log(getAns);