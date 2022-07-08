/*As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).*/

var gimme = function (inputArray) {
   return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
 };

/*The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.*/

function removeSmallest(numbers) {
   numbers = numbers.slice(0);
   const min = Math.min(...numbers);
   numbers.splice(numbers.indexOf(min), 1);
   return numbers;
 }