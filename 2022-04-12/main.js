/*Write a function that finds the sum of all its arguments.*/

function sum() {
  var sum =0; 
  for(var i=0;i<arguments.length;i++){
     sum += arguments[i];
  }
   return sum;}

/*Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.*/

   function booleanToString(b){
    if (b === true){
      return "true"
    }else{
      return "false"
    }
  }

/*Write a function which converts the input string to uppercase.*/

  function makeUpperCase(str) {
    return str.toUpperCase()
  }

/* Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

  function points(games) {
    let sum = 0
    for (i=0; i<games.length; i++){
      if (games[i].charAt(0)>games[i].charAt(2)){
        sum = sum + 3
      }else if (games[i].charAt(0)>games[i].charAt(2)){
        sum = sum + 0
      }else if (games[i].charAt(0)===games[i].charAt(2)){
        sum = sum + 1
      }
    }
    return sum
  }