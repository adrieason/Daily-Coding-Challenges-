/*Create a function that finds the integral of the expression passed.

In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

Notes:

The output should be a string.
The coefficient and exponent is always a positive integer.*/

function integrate(coefficient, exponent) {
  let top = exponent + 1 
  let bottom = coefficient/top 
  return bottom+"x^"+top
}

/*Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?*/

function smaller(nums) {
  let result = []
  for (i=0;i<nums.length;i++){
    let count = 0
    for (j=i+1;j<nums.length;j++){
      if(nums[i]>nums[j]){
        count++
      }
    }
  result.push(count)
  }
  return result
}

//p: input => array and the output is an array
//r: [2,3,1,7]=> [1,1,0,0]

/*Method Signature
dequeueCount(queues)
popCount(queues) (allowed for backward compatibility)
Algorithm
Your code should yield the same outcome as the algorithm described below, but should be more efficient than this naive approach, and you can use any algorithm you want to get the job done.

start at queue 0
keep performing the following actions until all queues have entered a terminal state
if the current queue has reached a terminal state, move to next queue
moving from the last queue to the next, takes you back to the first queue
otherwise dequeue a number of the current queue and enqueue it to the associated queue of that number; that queue becomes the new current queue
keep track of each time you dequeue a number and return the total amount of dequeueing operations*/

function dequeueCount(queues) {
  let count = 0, unqueued = [], i = 0, j;
  
  for(; i < queues.length; i++) {
    for(j = 0; j < queues[i].length; j++) {
      if (queues[i][j] !== i) {
        count += queues[i].length - j;
        break;
      }
    }
  }

  return count;
}