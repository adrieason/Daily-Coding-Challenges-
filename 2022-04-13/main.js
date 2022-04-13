/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.*/

function solution(number){
  let sum = 0 
  let arr = []
  for (i=0; i<number; i++){
    arr.push(i)
  }
  for (i=0 ; i<arr.length; i++){
    if ((arr[i]%3===0) || (arr[i]%5 === 0)){
      sum = sum + arr[i]
    }
  }
  return sum
}

/*A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

*/

var isSquare = function(n){
  if (Math.sqrt(n) % 1 === 0){
    return true
  }else{
    return false
  }
}

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */

function getCount(str) {
  var vowelsCount = 0;
  let newArr = Array.from(str)
  for (i=0;i<newArr.length;i++){
    if ((newArr[i]==='a') ||(newArr[i]==='e')||(newArr[i]==='i')||(newArr[i]==='o')||(newArr[i]==='u')){
    vowelsCount = vowelsCount + 1
  }
    }
  return vowelsCount
}


