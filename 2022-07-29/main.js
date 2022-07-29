/*In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here*/

function factorial(n){
  let answer = 1
if (n < 0 || n > 12){
    throw new RangeError();
}else{
  for (i=1;i<=n;i++){
    answer = answer * i
  }
  return answer
}
}


/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.*/

function likes(names) {
  if (names.length === 0){
    return "no one likes this"
  }else if (names.length === 1){
    return names[0] + " likes this"
  }else if (names.length ===2){
    return names[0]+" and "+names[1]+" like this"
  }else if (names.length ===3){
    return names[0]+", "+names[1]+" and "+ names[2]+" like this"
  }else{
    let num = names.length - 2
    return names[0]+", "+names[1]+" and "+num+" others like this"
  }
}

/*Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.*/

function include(arr, item){
  return arr.includes(item)
}


/*Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )*/

function alphabetPosition(text) {
  let arr = text.split('')
  let newArr = []
  for (i=0;i<text.length;i++){
    if (text[i] !== " " && typeof(text[i])=="string" && typeof(text[i] !== 'symbol')){
    newArr.push((text[i].toLowerCase().charCodeAt())-96)
  }
    }
  let answer =[]
  for (i=0;i<newArr.length;i++){
    if(newArr[i]>0 && newArr[i]<27){
      answer.push(newArr[i])
    }
