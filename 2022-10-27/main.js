/*Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.*/

function vowelOne(s){
  let vowelArr = ["a", "e", "i", "o", "u"];
  
  let sLowerCase = s.toLowerCase();
  
  let sArr = sLowerCase.split("");
  
  let onesZereos = [];
  
  for (let i = 0; i < sArr.length; i++) {    
    if (vowelArr.includes(sArr[i])) {
      onesZereos.push(1);
    } else {
      onesZereos.push(0);
    }
  }
  return onesZereos.join("");
}