//Your task is to write function factorial.

function factorial(n){
  let product = 1
  for (i=1;i<=n;i++){
    product *= i
  }
  return product
}

//better
function factorial(n){
  return n <= 1 ? 1 : n * factorial(n - 1);
}

