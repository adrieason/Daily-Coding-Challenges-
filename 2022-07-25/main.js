/*We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0*/

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      var sum = 0;
      var str = "";
      if (count === 0) {
        return "0=0";
      } else if (count < 0) {
        return count + "<0";
      } else {
        for (var i = 0; i < count; i++) {
          sum += i;
          str += i + "+";
        };
      sum += count;
      str += count + " = " + sum;
      return str;
      };
    };
  
    return SequenceSum;
  
  })();
  
  /*Given a list of integers, determine whether the sum of its elements is odd or even.
  
  Give your answer as a string matching "odd" or "even".
  
  If the input array is empty consider it as: [0] (array with a zero).*/
  
  const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";
  
  
  /*This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
  
  Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
  
  For example:
  
  derive(7, 8)
  In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.
  
  derive(7, 8) --> this should output "56x^7" 
  derive(5, 9) --> this should output "45x^8" 
  Notes:
  
  The output of this function should be a string
  The exponent will never be 1, and neither number will ever be 0*/
  
  function derive(coefficient,exponent) {
    let multiply = coefficient*exponent 
    let exp = exponent -1
    return multiply+'x^'+exp
  }
  
  /*This program tests the life of an evaporator containing a gas.
  
  We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
  
  The program reports the nth day (as an integer) on which the evaporator will be out of use.
  
  Example:
  evaporator(10, 10, 5) -> 29
  Note:
  Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.*/
  
  function evaporator(content, evap_per_day, threshold){ 
  var days = 0;
  var gas = 100;
    while(gas >= threshold){
      gas -= gas * evap_per_day / 100;
      days++;
  }
    return days;
  }  