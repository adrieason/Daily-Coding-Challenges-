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