/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):*/

function sumStr(a,b) {
  return (Number(a)+Number(b)).toString()
}

/*You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.*/

function twoSort(s) {
  let newArr = s.sort()
  let firstNum = newArr[0]
  return firstNum.split('').join('***')
}