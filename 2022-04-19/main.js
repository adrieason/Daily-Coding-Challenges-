/*Given an array of integers, return a new array with each value doubled.*/

function maps(x){
  let array = []
  for (i=0;i<x.length;i++){
    array[i]=x[i]*2
  }
  return array
}


/*We need a function that can transform a number into a string.

*/

function numberToString(num) {
  return num.toString()
}

/*Write a function called repeatStr which repeats the given string string exactly n times */

function repeatStr (n, s) {
  return s.repeat(n)
}

/*The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

*/

function century(year) {
  return Math.ceil(year/100)
}
