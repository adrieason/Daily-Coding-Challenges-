/* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

*/


function between(a, b) {
  let array = []
  for (i=a; i<b+1;i++){
    array.push(i)
  }
  return array
}

/*Given a number n, return the number of positive odd numbers below n, EASY!*/

function oddCount(n){
  return Math.floor(n/2)
  }

  /*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:*/

  function areYouPlayingBanjo(name) {
    if (name.charAt(0) === "R"|| name.charAt(0) === "r"){
      return name + ' plays banjo'
    }else{
        return name + ' does not play banjo';
    }
  }

  /*Code as fast as you can! You need to double the integer and return it.
 */

  function doubleInteger(i) {
    return i*2;
  }

  /*Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output*/

  function basicOp(operation, value1, value2){
    if (operation==="+"){
      return value1+value2
    }else if(operation==="-"){
      return value1-value2
    }else if (operation==="*"){
      return value1*value2
    } else if (operation==="/"){
      return value1/value2
    }
  }