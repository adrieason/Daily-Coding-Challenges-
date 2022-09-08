/*We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:*/

function arr (N){
  let newArr = []
  for (i=0;i<N;i++){
    newArr.push(i)
  }
  return newArr
}

/*Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"*/


function blackAndWhite(arr){
  if (Array.isArray(arr) === false){
    return "It's a fake array"
  }else if(arr.indexOf(13)>=0 && arr.indexOf(5)>=0){
    return "It's a black array"
  }else{
    return "It's a white array"
  }
}

/*You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!*/

items = []
items.push ({a: "b", c: "d"})