/*Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]*/

const reverseSeq = n => {
  let arr = []
  for (i=1;i<=n;i++){
    arr.push(i)
  }
  return arr.reverse()
};

/*This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.*/

function checkForFactor (base, factor) {
  if (base%factor===0){
    return true
  }else{
    return false
  }
}

/*Given a string str, reverse it omitting all non-alphabetic characters.

Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

*/

function reverseLetter(str) {  
  return str.split('').reverse().join('').replace(/[^A-Za-z]/g, "")
  }