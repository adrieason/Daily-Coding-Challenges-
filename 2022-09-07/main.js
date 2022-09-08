/*Complete the solution so that it reverses all of the words within the string passed in.*/

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

/*Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.*/

var greet = function(name) {
  name = name.toLowerCase().split('')
  let firstLetter = name.shift().toUpperCase()
  return "Hello "+firstLetter+name.join('')+"!"
};

/*I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a,b)=>a+b); 

/*Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.*/

function arrayMadness(a, b) {
  return a.reduce((x, y) => x + y ** 2, 0)>b.reduce((x, y) => x + y ** 3, 0)
}

/*Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, it is just a separator.*/
function bigToSmall(arr){
  var result=[];
for (var i=0;i<arr.length;i++){
  result=result.concat(arr[i])
  }
  return result.sort((a,b)=>b-a).join('>')
}
