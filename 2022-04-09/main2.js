/* Write a function that returns a string in which firstname is swapped with last name. */

function nameShuffler(str){
  let newArr = str.split(" ")
  let myName = newArr [0]
  newArr[0] = newArr [1]
  newArr[1] = myName
  return newArr[0]+' '+newArr[1]
}
  

/*Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output*/

function solution(a, b){
  if (a.length > b.length){
    return b.toString()+a.toString()+b.toString()
  }else{
    return a.toString()+b.toString()+a.toString()
  }
}

