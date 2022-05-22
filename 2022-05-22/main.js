/*The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?*/

function missingNo(nums) {
  let newArr = nums.sort((a,b)=>a-b)
    if(newArr[0] !== 0){
    return 0
      }else{
  for (i=0;i<101;i++){
    if (nums[i]+1 !== nums[i+1])
      return nums[i]+1
  }
  }
  }

  /*Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.*/

function SeriesSum(n){
  let sum = 0 
  for (i=0;i<n;i++){
    sum += 1/((i*3)+1)
  }
  return sum.toFixed(2)
}