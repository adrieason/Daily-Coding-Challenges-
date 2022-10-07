/*Tea for two!

Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.*/

function tea42(input) {
  // your code
  return (''+input).split('2').join('t');
};