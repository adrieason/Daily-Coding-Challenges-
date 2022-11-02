/*Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.*/

function last(x){
  return x
            .split(' ') //convert the string into an array. split on the space. every word is an element in the array 
            .sort((a,b)=>a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0)) 
}
