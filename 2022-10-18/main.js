/*Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Descends one at a time until reaching the minimum
repeat until the string is the appropriate length*/


function ascendDescend(length, minimum, maximum) {
  let result = '' //set a place for numbers to pass into 
  for (let i = minimum; i <= maximum; i++) {
    result += i //adds the i to the string until the i reaches the max
  }
  for (let i = maximum - 1; i > minimum; i--) {
    result += i //adds the i to the string uuntil it reaches the min 
  }
  result = result.repeat(length) //repetes the result length amount of times 
  return result.substring(0,length)  //cuts the string to only be the length that is required. 
}