/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.*/

function removeUrlAnchor(url){
  const index = url.indexOf("#");

  return index === -1 ? url : url.slice(0, index);
}

//Now you have to write a function that takes an argument and returns the square of it.
function square(num){
  return Math.pow(num,2)
}

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n){
  let num = n.toString().split('').sort((a,b)=>b-a).join('')
  return parseInt(num)
  }