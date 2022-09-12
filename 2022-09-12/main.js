/*Given an array/list [] of integers , Find the Nth smallest element in this array of integers*/

function nthSmallest(arr, pos){
  arr.sort((a,b)=>a-b)
  return arr[pos-1]
}

/*Given an array/list [] of integers , Find the product of the k maximal numbers.*/

function maxProduct(numbers, size){
  numbers.sort((a,b)=>a-b).reverse()
  return numbers.slice(0,size).reduce((a,b)=>a*b)
}