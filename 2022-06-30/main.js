/*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.*/

function getDivisorsCnt(n){
  let sum = 0 
  for (i=0;i<500000;i++){
    if (n%i===0){
      sum += 1
    }
  }
  return sum
}


//I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

function addFive(num) {
  var total = num + 5
  return total
}