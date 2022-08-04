//Write reverseList function that simply reverses lists.

function reverseList(arr) {
  return arr.reverse();
}

//Find the number with the most digits.

//If two numbers in the argument array have the same number of digits, return the first one in the array.

findLongest = arr => +(arr.sort((a,b) => (b+'').length - (a+'').length)[0]);
