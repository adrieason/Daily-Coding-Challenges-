/*You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result. */

function mergeArrays(arr1, arr2) {
  let combinedArray = arr1.concat(arr2).sort((a,b)=>a-b)

  return combinedArray.filter((c,index)=>{
    return combinedArray.indexOf(c)===index;
  })
}

/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.*/
function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
  
}

/*Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]*/

function upArray(arr){
  if (Math.min(...arr) < 0 || arr.length === 0 || Math.max(...arr) > 10) {
    return null;
  } else if (arr.length >  18) {
    let lastDigit = arr.pop();
    arr.push(lastDigit+1);
    return arr;
  } else {
    let returnArr = Number(arr.join('')) + 1
    return Array.from(String(returnArr), Number);
  }
}

/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.*/

function howMuchILoveYou(nbPetals) {
  if (nbPetals%6===1){
    return 'I love you'
  }else if (nbPetals%6===2){
    return 'a little'
  }else if (nbPetals%6===3){
    return 'a lot'
  }else if (nbPetals%6===4){
    return 'passionately'
  }else if (nbPetals%6===5){
    return 'madly'
  }else if (nbPetals%6===0){
    return 'not at all'
  }
}

//better
function howMuchILoveYou(nbPetals) {
  let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return petals[(nbPetals-1) % 6];
}