/*Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.*/

function compare(s1, s2) {
  if (s1 === null) {
    s1 = "";
  }

  if (s2 === null) {
    s2 = "";
  }

  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();

  var sum1 = 0;
  var sum2 = 0;

  for (var i = 0; i < s1.length; i++) {
    var num1 = s1.charCodeAt(i);

    if (num1 < 65 || num1 > 90) {
      sum1 = 0;
      break;
    } 

    sum1 += num1;   
  }

  for (var i = 0; i < s2.length; i++) {
    var num2 = s2.charCodeAt(i);

    if (num2 < 65 || num2 > 90) {
      sum2 = 0;
      break;
    } 

    sum2 += num2; 
  }

  return sum1 === sum2;
}