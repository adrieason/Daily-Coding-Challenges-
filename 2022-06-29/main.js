/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

*/

function smallEnough(a, limit){
  let result = true;
  for (i = 0; i < a.length; i++) {
    if (a[i] > limit) {
        result = false;
        break;
    }
}
  return result
}

/*Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".*/

function arithmetic(a, b, operator){
  if (operator === "add"){
    return a+b
  }else  if (operator === "subtract"){
    return a-b
  } else  if (operator === "multiply"){
    return a*b
  }else  if (operator === "divide"){
    return a/b
  }
}

/*Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:*/

function warnTheSheep(queue) {
  let num = queue.length - queue.indexOf("wolf") - 1
  if (num>0){
     return "Oi! Sheep number " + num+ "! You are about to be eaten by a wolf!"
  }else{
    return "Pls go away and stop eating my sheep"
  }
}