//Parameters, Returns, Examples, Pseudocode 

/*This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).*/

//parameters you have an arr that you need to remove the first and last element from 
//returns you need to return an array, that has a length -2 of the starting length 
//examples sooo [1,2,3,4,5] => [2,3,4]

function array(arr){
  var data = arr.split(',');
  data.pop()
  data.shift();
  return data.length ? data.join(' ') : null;
  }
  