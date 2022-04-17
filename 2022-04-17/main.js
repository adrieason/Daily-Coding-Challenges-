/*Write a function to split a string and convert it into an array of words.

 */

function stringToArray(string){
  return string.split(' ')
}

/*Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

*/

function isDivisible(n, x, y) {
  if (n%x === 0 && n%y === 0){
    return true
  }else{
    return false
  }
}

/*Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.*/

function squareArea(A){
  let c = (A*2)/Math.PI
  let area = c*c
  return (area.toFixed(2))*1
  
  }