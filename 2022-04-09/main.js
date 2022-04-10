/* Write a function that returns a string in which firstname is swapped with last name. */

function nameShuffler(str){
  let newArr = str.split(" ")
  let myName = newArr [0]
  newArr[0] = newArr [1]
  newArr[1] = myName
  return newArr[0]+' '+newArr[1]
}
  
