/*Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.*/




function mygcd(x,y){
  let num
  if (x<y) num = x
  else num = y
  let divisor = num;
  for (i=num;i>0;i--){
    if (x%i===0 && y%i===0){
      return i
    }
  }
}

/*Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]*/

function largest(n, array) {
  return array.sort((a,b)=>a-b).splice(array.length-n,n)
}
