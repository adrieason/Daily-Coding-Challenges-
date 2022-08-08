/*Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].*/

// {params} a two dimensional array is the input, so arrays within arrays, there are no set amount of arrays within the arrays. 
//{example} [[1,2,3],[1,2,5],[2,3,4],[3,4,5]]==> [1,2,2,2,3,3,3,4,4,5,5]
//{result} one array, with one dimension 
//{psedocode} 

function flattenAndSort(array) {
  let arr = [] //set an array that will hold the combine array 
  for (i=0;i<array.length;i++){//loops through the first dimension of the array 
    for (j=0;j<array[i].length;j++){//loops through the arrays within that array 
      arr.push(array[i][j])//pushes each array item into the first dimension into the new answer array 
    }
    }
  return arr.sort((a,b)=>a-b)//sorts the array from smallest to largest. 
}