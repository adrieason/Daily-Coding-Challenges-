/*Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.*/


var orderedCount = function (text) 
{
  var arr=[]; //set blank array 
  for (var i=0; i<text.length; ++i) //loops through text 
  {
     var k=0;
     for (var j=0; j<arr.length; ++j) //loops through text again to compare letter to another letter 
        if (arr[j][0]==text[i])
            k++;
      if (k==0) //if the k is the first letter
      {
        for (var j=i; j<text.length; ++j)
          if (text[j]==text[i])
             k++; //adds a number to k before the next loop 
          arr.push([text[i],k]);//pushing the number and the lettter 
       }
  }
  return arr; // returns the array 

}
