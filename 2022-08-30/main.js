/*Task

Create a method to see whether the string is ALL CAPS.

Examples (input -> output)

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.*/

String.prototype.isUpperCase = function() {
  if(this.toString()===this.toUpperCase()){
    return true
  }else{
    return false
  }
}

/*An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example*/
function contamination(text, char){
  let num = text.length 
  return char.repeat(num)
}

/*Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.*/
function sumCubes(n){
  let sum = 0 
  for (i=1;i<=n;i++){
    sum += (i*i*i)
  }
  return sum
}


