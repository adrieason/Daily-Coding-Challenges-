/*Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/
function whatday(num) { 
  if (num===1){
    return "Sunday"
  }else if (num===2){
    return "Monday"
  }else if (num===3){
    return "Tuesday"
  }else if (num===4){
    return "Wednesday"
  }else if (num===5){
    return "Thursday"
  }else if (num===6){
    return "Friday"
  }else if (num===7){
    return "Saturday"
  }else{
    return "Wrong, please enter a number between 1 and 7"
  }
}

/*I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example

n = 3, so I expect a 3x3 square back just like below as a string:*/

function generateShape(integer){
  let string = ""
  let sucks = "+" 
  for (i=0;i<integer-1;i++){
    string += sucks.repeat(integer) +"\n"
  }
  return string+sucks.repeat(integer)
}