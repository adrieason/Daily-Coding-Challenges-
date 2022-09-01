/*Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

*/

const getNumberFromString = (s) => parseInt(s.split("").filter(x => "0123456789".includes(x)).join(""))

/*You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be
*/

function transposeTwoStrings(arr){
  var result = []; //sets result as an arra 
  var len = Math.max(arr[0].length, arr[1].length); //finds out the length of the longest array element and sets len to equal that number 
  
  for (var i = 0; i < len; i++) {
    var column = (arr[0][i] || " ") + " " + (arr[1][i] || " "); //creates an array of the letters next to the pair, if there isn't an element at that index it pushes a space into the array 
    result.push(column); //pushes it to the array created above 
  }
  
  return result.join("\n"); //joins that array into a string, placing "\n" between them for "enter" or new line
}