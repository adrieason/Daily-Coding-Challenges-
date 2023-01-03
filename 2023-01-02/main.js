/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.*/

function invert(array) {
   return array.map(elm=>elm*-1)
}

/*Problem:
You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

Examples:
You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

six_toast(5) == 1
And in case of 12 you need 6 toasts less (but not -6):

six_toast(12) == 6*/

function sixToast(num) {
  return Math.abs(num-6)
}

/*
The Collatz Conjecture states that for any positive natural number n, this process:

if n is even, divide it by 2
if n is odd, multiply it by 3 and add 1
repeat
will eventually reach n = 1.

For example, if n = 20, the resulting sequence will be:

[ 20, 10, 5, 16, 8, 4, 2, 1 ]
Write a program that will output the length of the Collatz Conjecture for any given n.
In the example above, the output would be 8.*/

function collatz(n) {
  let count = 1
  while(n>1){
    if (n%2===0){
         n = n/2
    }else{
      n = (n*3)+1
    }
    count ++
  }
  return count
}

/*Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"*/

function ensureQuestion(s) {
  if(s[s.length-1]==='?'){
    return s
  }else{
    return s+"?"
  }
}
