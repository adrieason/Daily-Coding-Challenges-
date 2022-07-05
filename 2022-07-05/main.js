/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
*/

function sumOfMinimums(arr) {
  let newArr = []
  for (i=0;i<arr.length;i++){
    newArr.push(Math.min(...arr[i]))
  }
  return newArr.reduce((a,b)=>a+b)
}