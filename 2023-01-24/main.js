/*Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

left - The current floor of the left elevator
right - The current floor of the right elevator
call - The floor that called an elevator
It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.*/

function elevator(left, right, call){
  if (left===right){
    return "right"
  }
  if (left===call){
    return "left" 
  }
  if (right===call){
    return "right"
  }
  let disRight = Math.abs(right - call)
  let disLeft = Math.abs(left - call)
  
  if (disRight<disLeft){
    return "right"
  }else if (disRight>disLeft){
    return "left"
  }
  if (disRight === disLeft){
    return 'right'
  }
}

/*acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

"Biodiversity Serving Our Nation", or BISON

(from https://en.oxforddictionaries.com/definition/backronym)

Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

dict["P"] == "perfect"*/

var makeBackronym = function(string){
  return string.split('').map(x=>dict[x.toUpperCase()]).join(' ')
};

/*Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!*/

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.*/

function sumArray(array) {
  if (typeof array !== "object" ||array===null||array===[]||array.length<=2){
    return 0
  }
  array.sort((a,b)=>a-b).pop()
  array.shift()
  return array.reduce((a,b)=>a+b)
}

/*You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.*/
function sortArray(array) {
  let index = []
  let nums = []
  for (i=0;i<array.length;i++){
    if (array[i]%2!==0){
      index.push(i)
      nums.push(array[i])
    }
  }
  nums.sort((a,b)=>a-b)
  for(i=0;i<index.length;i++){
    array[index[i]]=nums[i]
  }
  return array
}

/*The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

function count (string) {  
  let obj = {}
  string = string.split('')
  for (i=0;i<string.length;i++){
    obj[string[i]] = (obj[string[i]] || 0) + 1
  }
  return obj
}
