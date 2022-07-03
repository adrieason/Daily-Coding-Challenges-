//Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

function sortMyString(S) {
  let arr = S.split('')
  let newArr1 = []
  let newArr2 = []
  for (i=0;i<arr.length;i++){
    if (i===0){
      newArr2.push(arr[i])
    }else if (i%2===0){
      newArr2.push(arr[i])
    }else{
      newArr1.push(arr[i])
    }
  }
  let wordOne = newArr2.join('')
  let wordTwo = newArr1.join('')
  return wordOne + ' '+ wordTwo
}

//better 
const sortMyString = s => {
  let even = s.split('').filter((v, i) => i % 2 === 0).join('')
  let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
  return even + ' ' + odd
}