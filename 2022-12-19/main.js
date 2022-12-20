/*Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -*/

function add(x, y){
 // let arr = ([x,y]).sort((a,b)=>a-b)
 // let count = arr[0]
 // for (i=0; i<arr[1]; i++){
 //   count ++
 // }
 // return count
}

const add = (x, y)  => {
  while (y != 0) { //while y does not equal 7 
    const carry = x & y;    //variable carry will equal both x and y
    x = x ^ y; //x equals c to the power of y 
    y = carry << 1; //
 } 
 return x; 
}