/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

function getAverage(marks){
  let arr = marks
  let total = arr.reduce((a,b)=>a+b)
  let count = arr.length
  return Math.floor(total/count)
}