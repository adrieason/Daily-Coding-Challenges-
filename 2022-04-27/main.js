//Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

function sum(array) {
  return array.reduce((preV,curV)=>preV+curV,0)
  }

/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.*/
function countPositivesSumNegatives(input) {
  let sum = 0
  let summy = 0
  let arr = []
  for (i=0;i<input.length;i++){
    if (input[i]>0){
      sum +=1
    }
    if (input[i]<0){
      summy += input[i]
    }
  }
  
  arr[0]=sum
  arr[1]=summy
  return arr
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.

function sumMix(x){
  return x.reduce(function(s,v){
    return s+Number(v)
  },0)
}
