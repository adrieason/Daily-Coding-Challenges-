/*Write a program that, given a word, computes the scrabble score for that word.

*/
function scrabbleScore(str){
  var scores = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
  var score = 0;
  str = str.toUpperCase();
  for (var i=0; i<str.length; i++) {
    var n = str.charCodeAt(i) - 65;
    if (n<0 || n>25) continue;
    score += scores[n];
  }
  return score;
}

/*Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal to the distance between a and b.

Please note the following:

When a is close to b, return 0.
Otherwise...

When a is less than b, return -1.

When a is greater than b, return 1.

If margin is not given, treat it as zero.

Assume: margin >= 0

Tip: Some languages have a way to make parameters optional.*/

function closeCompare(a, b, margin=0){
  let distance = Math.abs(a-b)
  if (margin === ''){
    margin = 0
  }
  if (margin>=distance){
    return 0
  }else if(a<b){
    return -1
  }else if(a>b){
    return 1
  }
}

