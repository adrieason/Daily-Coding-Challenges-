/*The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included). */

function pipeFix(numbers){
  let newArray = numbers.sort((a,b)=>a-b)
  let min = newArray[0]
  let max = newArray[newArray.length-1]
  let arr = []
  for (i=min;i<max+1;i++){
    arr.push(i)
  }
  return arr
  }