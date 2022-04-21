/*Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:*/

function findNeedle(haystack) {
  for (let i=0; i<haystack.length; i++){
    if (haystack[i]==='needle'){
      return 'found the needle at position '+i
    }
  }
}

/* In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata. */

function testEven(n) {
  if (n%2===0){
    return true
  }else{
    return false
  }
}

/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. */
  
function invert(array) {
  for(i=0;i<array.length;i++){
    array[i]=array[i]*-1
  }
  return array
}

/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!*/

function smash (words) {
  let str = words[0]
  for (i=1;i<words.length;i++){
    str = str + ' '+ words[i]
  }
  if (words.length === 0){
    str=''
  }
  return str
};

/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

*/
function sum (numbers) {
  let sum = 0 
  for (i=0;i<numbers.length;i++){
    sum += numbers[i]
  }
  return sum
};


