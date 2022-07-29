/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/

const quarterOf = (month) => {
  if(month < 4) {
    return 1}
  if(month < 7) {
    return 2}
  if(month < 10) {
    return 3}
   else{
     return 4;
   }
 }


 /*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/

function rowSumOddNumbers(n) {
  return n*n*n
}

