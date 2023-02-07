/*For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.*/

function pairZeros(arr) {
  let count = 0 
  for (i=0;i<arr.length;i++){
    if (arr[i]===0){
      count +=1
      if (count%2===0){
        arr[i]=''
      }
    }
  }
  return arr.join('').split('').map(elm=>Number(elm))
}

/*Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep charactr(s).*/

function freqSeq(str, sep) {
  let obj = {}
  let arr = str.split('')
  for (i=0;i<arr.length;i++){
    if (!obj[arr[i]]){
      obj[arr[i]]=1
    }else[
      obj[arr[i]]+=1
    ]
  }
  for (i=0;i<arr.length;i++){
    arr[i]=obj[arr[i]]
  }
  return arr.join(sep)
}

/*You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.*/

function lastSurvivor(letters, coords) {
  let array = letters.split('')
  for (i=0;i<coords.length;i++){
    array.splice(coords[i],1)
  }
  return array.join()
}
