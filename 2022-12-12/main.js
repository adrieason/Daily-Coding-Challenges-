/*Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.*/

function stringTransformer(str) {
  let arr = str.split('')
  for (i=0;i<arr.length;i++){
    if(arr[i].toUpperCase()===arr[i]){
      arr[i]=arr[i].toLowerCase()
    }else{
      arr[i]=arr[i].toUpperCase()
    }
  }
  return arr.join('').split(' ').reverse().join(' ')
}


/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let numsMap = {} //creates an object to push values into 
  for(i=0;i<nums.length;i++){ //loop through the nums array 
      let num = nums[i] //num is equal to whatevers in the i element of the array 
      if(numsMap[num]){//if the object contains the num return true
          return true
      }else{
          numsMap[num]=true //else add the element num into the object and set the value to true 
      }
  }
  return false //if none of the values are contained in the object, then return true. 
};