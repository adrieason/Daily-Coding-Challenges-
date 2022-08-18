/*Create a function that takes a string and an integer (n).

The function should return a string that repeats the input string n number of times.

If anything other than a string is passed in you should return "Not a string"*/

var repeatIt = function(str, n) {
  if (typeof str !== 'string') {
    return "Not a string";
  }else{
    return str.repeat(n)
  }
}

/*Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.*/

function replace(s){
  let arr = s.split('')
  for (i=0;i<=arr.length;i++){
    if (arr[i]==='a'||arr[i]==='e'||arr[i]==='i'||arr[i]==='o'||arr[i]==='u'||arr[i]==='A'||arr[i]==='E'||arr[i]==='I'||arr[i]==='O'||arr[i]==='U'){
      arr[i]='!'
    }
  }
  return arr.join('')
}

//better 
function replace(s){
  var newS = ''
  var vowels = "aAeEiIoOuU"
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) === -1) {
      newS += s[i]
    }  else {
      newS += '!'
    }
  }
  return newS
}