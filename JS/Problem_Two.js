/*
 Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
 Bangla of a student.
*/

let mathMarks = 75.25;
let biologyMarks = 65;
let chemistryMarks = 80;
let physicsMarks = 35.45;
let totalSubjects = 4;

let totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks;

let averageMarks = totalMarks / totalSubjects;
averageMarks = averageMarks.toFixed(2);
averageMarks = parseFloat(averageMarks);
console.log(averageMarks);
