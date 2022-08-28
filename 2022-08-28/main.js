/*You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"*/

function leo(oscar){
  if (oscar===88){
    return "Leo finally won the oscar! Leo is happy"
  }else if (oscar===86){
    return "Not even for Wolf of wallstreet?!"
  }else if (oscar<88){
    return "When will you give Leo an Oscar?"
  }else{
    return "Leo got one already!"
  }
}

/*You are to write an function that takes a string as it's first paramter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string",3,5) 
Should return

"string-string-string-string-string"

Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

Simple. Good luck.*/

function modifyMultiply (str,loc,num) {
  str = str.split(' ')
  let word = str[loc]+" "
  return word.repeat(num).trim().split(' ').join("-")
} 