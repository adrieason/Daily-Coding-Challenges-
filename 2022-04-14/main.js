/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  let sum = 0
  for(i=0;i<arr.length;i++){
    if (arr[i]>0){
      sum += arr[i]
    }
  }
  return sum
}

/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str){
  return str.slice(1,-1)
};

/* Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */

function boolToWord( bool ){
  if (bool===true){
    return "Yes"
  }else{
    return "No"
  }
}