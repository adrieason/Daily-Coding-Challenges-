/*A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.*/


function isNarcissistic(n){
  let sum = 0 
  let a = n.toString()
  for (i=0;i<a.length; i++){
  sum += Math.pow(Number(a[i]),a.length)
    }
  if (sum===n){
    return true
  }else{
    return false
  }
}

/*If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

*/
function DNAStrand(dna){
  let newThing = dna.split('')
  for (i=0;i<newThing.length;i++){
    if (newThing[i]==='A'){
      newThing[i]='T'
    }else if (newThing[i]==='T'){
      newThing[i]='A'
    }else if (newThing[i]==='G'){
      newThing[i]='C'
    }else if (newThing[i]==='C'){
      newThing[i]='G'
    }
  }
  return newThing.join('')
}

/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative. */

function findNextSquare(sq) {
  if (Math.sqrt(sq)%1===0){
    let a = Math.sqrt(sq)+1
    return a*a
  }else{
  return -1;
}
  }