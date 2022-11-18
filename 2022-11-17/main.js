/*Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.*/

function averageLength(word) { 
  let arr = []
  for (i=0;i<word.length;i++){
    arr.push(word[i].length)
  }
  let num = Math.round(arr.reduce((a,b)=>a+b)/arr.length)
  let result = []
  for (i=0;i<word.length;i++){
    result.push(word[i][0].repeat(num))
  }
  return result
}

