/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.*/
//{params} two strings are given without any spaces
//{result} one string, with all of the letters from the first two strings, this string is in abc order and doesn't have any duplicate letters 
//{example} s1=his s2=hers ==> ehirs

function longest(s1, s2) {
  s1 = s1 + s2 //combine both strings into one 
  let chars = s1.split('').sort() //make the combine string and array and sort it in abc order. set this equal to chars 
  let uniqueChars = chars.filter((c, index) => { // filter out any duplicate letters 
    return chars.indexOf(c) === index;
})
  return uniqueChars.join('')  //return this array after it's joined togeether into a string 
}

/*Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.*/

function angle(n) {
  return ((180*n) - 360)
}