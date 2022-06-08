//Parameters, Returns, Examples, Pseudocode 
//p: a string is the input, can be any length
//return a boolean of true or false 
//example if the input is heloleh then the reverse is the same. so true is return. else, a false is returned 

//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let top=x.toLowerCase() //ensures the it isn't case senstive 
  let bottom = x.toLowerCase().split('').reverse().join("")//reverses the string, by making it a array, reversing it, then returning it to a string
  if (top===bottom){//checks if the str is equal to the reverse of the string 
    return true
  }else{
    return false
  }
}