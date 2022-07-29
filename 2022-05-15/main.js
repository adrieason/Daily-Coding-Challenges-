/*Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

*/
function roundToNext5(n){
  return Math.ceil(n/5)*5
}

/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
  return s.replace(/!/g,'')
}

/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.*/

function updateLight(current) {
  if (current === 'green'){
    return 'yellow'
  }else if (current === 'yellow'){
    return 'red'
  }else if (current === 'red'){
    return 'green'
  }
}

//better
function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

