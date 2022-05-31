/*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.*/


function stringy(size) {
  var arr = [];

  for(var i = 0; i < size; i++){
    if(i % 2 == 0){
      e = "1";
      arr.push(e);
//       console.log(e);
    }else{
      e = "0";
      arr.push(e);
//       console.log(e);
    }
  }
  
  return arr.join("");
}

/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.*/

function addBinary(a,b) {
  let sum = a + b 
  return sum.toString(2)
}
/*
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)
*/
function unusualFive() {
  return 'Hello'.length
}