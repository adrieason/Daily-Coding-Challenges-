
/*Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.*/


function hasUniqueChars(str){
  for(let i = 0; i < str.length; i++) //loops over all of the items in the array 
      for(let j = i + 1; j < str.length; j++) //loops over all of the items in the array again to compare them 
          if (str[i] == str[j]){//if they are equal the program stops to return true 
              return false;
}
  return true;//if the program doesn't it returns false 
}