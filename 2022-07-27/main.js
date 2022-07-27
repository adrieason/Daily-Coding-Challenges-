/*You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!*/ 

function expandedForm(num) {
  let arr = num.toString().split('')
  let zero = '0'
  let exp = arr[0]+zero.repeat(arr.length-1)
  for (i=1;i<arr.length;i++){
    if (arr[i] != 0){
    exp = exp +' + '+ arr[i]+zero.repeat(arr.length-i-1)
  }
    }

  return exp
}