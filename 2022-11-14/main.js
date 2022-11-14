
/*You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]*/

 function monkeyCount(n) {
  //setting up a array that holds the final result 
  let array = []
  //push all the numbers 1-n into the array as different elements 
  for (i=1;i<=n;i++){
    array.push(i)
  }
  return array
}

/*Happy Holidays fellow Code Warriors!

Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code

Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):

"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"*/

function sortGiftCode(code){
  return code.split('').sort().join('')
}

/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case*/

var countBits = function(n){
  var binary = ''; 
  while (n>0){
    binary = (n%2) + binary; 
    n = Math.floor(n/2);
  }
  let array = binary.split('')
  let sum = 0
  for(i=0;i<array.length;i++){
    if (array[i]==='1')
      sum +=1
  }
  return sum
}