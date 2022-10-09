/*You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:

1
22
333
....
.....
nnnnnn*/ 

function pattern(n){
  var output="";
    for (var i=1;i<=n;i++){
        for (var j=0;j<i;j++){
          output += i;
        }
        if (i === n) break;
        output += "\n";
    }
  return output;
 }
