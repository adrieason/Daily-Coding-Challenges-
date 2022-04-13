/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr){
  let newArr = []
  for (i=0;i<arr.length;i++){
    if ((i % 2 === 0)||i === 0){
      newArr.push(arr[i]);
    }
  }    return newArr;

  }

  /*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).*/
  
  function powersOfTwo(n){
    let nums = []
    let pows
    for (i=0;i<=n;i++){
      nums[i]=Math.pow(2,i)
    }
    return nums
  }