/*Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.*/

function adjacentElementsProduct(array) {
  let newArr = []
  for (i=0;i<array.length-1;i++){
    newArr.push(array[i]*array[i+1])
  }
  newArr.sort((a,b)=>a-b)
  return newArr[newArr.length-1]
}