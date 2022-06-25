/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

*/

function doubleChar(str) {
  let arr = []
  for (i=0;i<str.length;i++){
    arr.push(str[i])
    arr.push(str[i])
  }
  return arr.join('')
}

