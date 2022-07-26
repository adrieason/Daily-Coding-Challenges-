/*Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.*/

function largestPairSum (numbers) {
    let large = numbers.sort((a,b)=>a-b)
    return large[large.length-1]+large[large.length-2]
  }

/*Find Mean

Find the mean (average) of a list of numbers in an array.

Information

To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

*/

var findAverage = function (nums) {
    let total = nums.length 
    return nums.reduce((a,b)=>a+b)/total
  }