
/*You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
Have fun!

*/

function maxDiff(list) {
  if (list===[]||list.length<2){
    return 0
  }
  list.sort((a,b)=>a-b)
  return list[list.length-1]-list[0]

};

/*Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.*/

function reverse(str){
  let arr = str.split(' ')
 for (i=0;i<arr.length;i++){
   if (i%2===1 && i!=0){
     arr[i] = arr[i].split('').reverse().join('')
   }
 }
  return arr.join(' ').trim()
}

/*Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .*/ 

function maxTriSum(numbers){
  numbers = numbers.filter((item, 
            index) => numbers.indexOf(item) === index)
  let array = numbers.sort((a,b)=>a-b).splice(numbers.length-3,3)
  let sum = 0
  for (i=0;i<=2;i++){
    sum = sum + array[i]
  }
  return sum
}

13. Ransom Note
Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

 function ransomNote(note, magazine){
  const noteWords = note.split(" ")
  const magazineWords = magazine.split(" ")
  const magazineHash = {}
  let possible = true
  
for (const word of magazineWords){
  (magazineHash[word]=magazineHash[word]+1|| 1)
}

for (const word of noteWords){
  if (magazineHash[word]){
    magazineHash[word]--
    if(magazineHash[word]<0) return false 
  }else{
    possible = true
  }
}

return possible
}

describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });
it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });
it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });
it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});






