/*Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether*/

function toAcronym(inp){
  let arr = []
  let newArr = inp.toUpperCase().split(' ')
  for (i=0;i<newArr.length;i++){
    arr.push(newArr[i][0])
  }
  return arr.join('')
}
