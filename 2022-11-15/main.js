
/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!*/

function capitalize(s){
  let y = s.split('')
  let elementOne = []
  let elementTwo = []
  for (i=0;i<y.length;i++){
    if (i===0||i%2===0){
      elementOne.push(y[i].toUpperCase())
      elementTwo.push(y[i])
    }else{
      elementOne.push(y[i])
      elementTwo.push(y[i].toUpperCase())
    }
  } 
  return ([elementOne.join(''),elementTwo.join('')])
};


/*Return the type of the sum of the two arguments*/

function typeOfSum(a, b) {
  return typeof (a+b)
}
