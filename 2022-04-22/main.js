/* You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
 */

function getAge(inputString){
  let num = inputString.charAt(0)
  return Number(num)
}

/* have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years

15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years

15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

var humanYearsCatYearsDogYears = function(humanYears) {
  let years = []
  let cat 
  let dog
  if (humanYears === 1){
    cat = 15
    dog = 15 
  }else if (humanYears === 2){
    cat = 15+9
    dog = 15+9
  }else{
    cat = 15+9+((humanYears-2)*4)
    dog = 15+9+((humanYears-2)*5)
  }
  years[0]=humanYears 
  years[1]=cat
  years[2]=dog
  return years 
}

/*Description:

Make a simple function called greet that returns the most-famous "hello world!".

Style Points

Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?*/

function greet (){
  return "hello world!"
}

/*Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

*/

function solution(nums){
  if (nums === null){
    return []
  }else{
  nums.sort((a,b)=>a-b);
  return nums
}
  }

/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/

  function lovefunc(flower1, flower2){

    let a = flower1%2
    let b = flower2%2
  
    if (a !== b){
      return true
    }else{
      return false
    }
  }