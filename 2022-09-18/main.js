/*Given a number, Find if it is Tidy or not .*/

function tidyNumber(n){
  let arr = String(n).split('').sort((a,b)=>a-b).join('')
  let arr2 = String(n)
  if (arr===arr2){
    return true
  }else{
    return false
  }
}