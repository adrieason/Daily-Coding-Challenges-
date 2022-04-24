/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/

function digitize(n) {
  return Array.from(String(n), Number).reverse()
}

/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.*/

function getSum( a,b ){
  let low, high
  let sum = 0
  
  if (a==b){
    return a
  }else{
    if (a>b){
       high = a;
       low = b;
    }else{
       high = b 
       low =a
    } 
    for (i=low; i<=high;i++){
    sum += i;