/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

*/

function getMiddle(s){
  if (s.length%2===0){//middle two letters
    let num = s.length/2
    return s[num-1]+s[num]
  }else if (s.length%2===1){//middle letter
    let num = s.length/2
    return s[num-.5]
  }
}