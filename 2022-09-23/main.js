/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []*/

function inArray(array1,array2){
  var i, j, result = []; //sets i, j as variables and creates an array for the result to be pushed to 

 outer: for (j = 0; j < array1.length; j++) { //creates a loop that will loop through the elements in array 1
      for (i = 0; i < array2.length; i++) { //creates a loop that will loop over array two 
          if (array2[i].includes(array1[j])) { //if statement for if the i elements of the 2nd array includes the j element of array 1 something will happen 
              result.push(array1[j]); //if it is inlcuded push the element to the result array 
              continue outer; //gives the loop access too the outer variables? 
          }
      }
  }
  return result.sort();//results the array sorted in ABC order! 
}

