/*Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"*/

function tripleTrouble(one, two, three){
  let array = []
  for (let i = 0; i<one.length;i++){
    array.push(one[i])
    array.push(two[i])
    array.push(three[i])
  }
  return array.join('')
 }
