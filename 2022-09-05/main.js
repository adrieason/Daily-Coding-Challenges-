/*In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.*/

function makeString(s){
  let arr = s.split(' ')
  let ans = []
  for (i=0;i<arr.length;i++){
    ans.push(arr[i][0])
  }
  return ans.join('')
}

