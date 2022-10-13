/*Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)*/

reverse = function(array) {
  let arr = []
  for (i=0;i<array.length;i++){
    arr.unshift(array[i])
  }
  return arr
}

//better
reverse = function(array) {
  return array.reduceRight(function(a, v){ return a.push(v), a }, []);
}