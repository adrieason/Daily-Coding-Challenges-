/*Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.*/

function toNumberArray(stringarray){
  return stringarray.map(elm=>Number(elm))
}


/*Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.*/

function sumPairs(ints, s) {
  for (let i = 1; i < ints.length; i++) {
    for (let j = 0; j < i; j++) {
      if (ints[i] + ints[j] === s) return [ints[j], ints[i]];
    }
  }
}

