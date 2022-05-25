/*In JavaScript, your code is running in a function, let us step by step complete your first JS function.

*/
function helloWorld(){
  let str = 'Hello World'
  console.log(str)
}

//Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  let newArr = arr.sort((a,b)=>a-b)
  let sum = 0
  for (i=0;i<(newArr.length/2);i++){
    sum = sum + (newArr[i]*newArr[newArr.length-1-i])
  }
  return sum
}