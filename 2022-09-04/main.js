/*Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.*/ 

function sumFromString(str){
  var numbers = [],
      num = [];
  for (var i  = 0; i < str.length; i ++){
    if (!isNaN(str[i]) && str[i] !== ' ')
      num.push(str[i])
    else
      if (num.length > 0) {
        numbers.push(+num.join(''));
        num = [];
      }
  }
  numbers.push(+num.join(''));
  return numbers.reduce((prev, curr) => prev + curr, 0);
  // ...
}

