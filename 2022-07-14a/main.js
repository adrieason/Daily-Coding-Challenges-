/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!*/

//parameter - a string is the input 
//results - a string with ")"s and "("s and
//example, if there is more than one of a leter the letter turns into ) if there is only one of that letter the letter turns into )
//pse - need to create an array that holds the output and loop through the input to see if any of the letters repete, check for this letter by letter 
function duplicateEncode(word){
  word = word.toLowerCase(); //sets all characters to lower case 
 let unique = []; //sets an array to hold characters depending on if they occur or not more than once 
 for (var i = 0; i < word.length; i++) { //loops through all the elements in the array
  if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) { //check for any elements that repeat

    unique.push('('); //for each character that never repeat

  } else
  unique.push(')')//for each character that do repeat place )

}
return unique.join('');
}//return the array joined as a string  