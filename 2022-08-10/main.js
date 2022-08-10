/*Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.*/

function correctTail(bod, tail){
  
  let sub = bod.substr(bod.length-(tail.length))
  
  if (sub === tail){
    return true
  }
  else{
    return false
  }
}

/*If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.*/

//{params} string all lowercase is the input. letters need to be assigned to the value starting with a=1...
//{results} a number, that is the sum of all the letters in the string
//{example} abc ==> 6

function wordsToMarks(string){
  let arrayNumbers = [] //creates an array for numbers to be pushed in for each letter
  for (i=0;i<string.length;i++){ //starts a loop that loops over every letter in the string
    arrayNumbers.push(string.charCodeAt(i)-96)//pushes the value of each letter in the string to the arrayNumbers array 
  }
  return arrayNumbers.reduce((a,b)=>a+b) //adds all the numbers in the arrayNumber array together and returns it
}

/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/

//{params} an array of numbers is the input... one number occurs an odd amount of times 
//{results} a number, the value that occurs an odd amount of times 
//{example} [1,2,3,4,3,2] => 1 

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {//creates a loop that goes over each value in the array 
         
       let count = 0; //sets counter to 0
        
       for (let j = 0; j < A.length; j++) //creates a loop that goes over the value in the array again 
       {
           if (A[i] == A[j])//checks if the first loop is equal to the second one.
               count++;//if it is equal 1 is added to the counter 
       }
       if (count % 2 != 0)//if the count is not even (odd) the number in the array is returned 
           return A[i];
   }
   return -1;  return 0;
}