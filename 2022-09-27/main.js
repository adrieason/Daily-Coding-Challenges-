/*There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique*/

function findUniq(arr) {
  //set strayChar equal to the first element in the array
   let strayChar = arr[0];

   // checking to see if it's different from the second two elements
   if (strayChar !== arr[1] && strayChar !== arr[2]) return strayChar;

   // if not find the first value that is different
   for(let i = 1; i < arr.length; i++){
     if(strayChar !== arr[i])return arr[i];
   }
} 
