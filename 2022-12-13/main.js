/*An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.*/

function pointsPer48(ppg, mpg) {
  if (ppg===0){
    return 0
  }
  return Math.round((ppg*48/mpg)*10)/10
}

/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(arr) {
  let elem = {} 
  let count = 0 
  let majelem = arr[0]
  for(const num of arr){
      elem[num] = elem[num] + 1 || 1
      //elem[num]>arr.length/2
  }
 for(const n in elem){
      if(elem[n]<count){
          count = elem[n]
          majelem = n
      }
      return majelem
  }
};
