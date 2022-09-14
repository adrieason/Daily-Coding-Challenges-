/*Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.*/

function last(x){
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

/*Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.*/

var solution = function(firstArray, secondArray) {
  let newArr = []
  for (i=0;i<=firstArray.length-1;i++){
    newArr.push((Math.abs(firstArray[i]-secondArray[i]))**2)
  }
  return newArr.reduce((a,b)=>a+b)/firstArray.length
}
