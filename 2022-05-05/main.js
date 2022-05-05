/*An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!*/

function solve(n) {
  let fivehundreds = Math.floor(n/500)
  let sum = n - (fivehundreds*500)
  let twohundreds = Math.floor(sum/200)
  sum = n - (fivehundreds*500) - (twohundreds*200)
  let onehundreds = Math.floor(sum/100)
  sum = n - (fivehundreds*500) - (twohundreds*200) - (onehundreds*100) 
  let fifty = Math.floor(sum/50)
  sum = n - (fivehundreds*500) - (twohundreds*200) - (onehundreds*100) - (50*fifty)
  let twen = Math.floor(sum/20)
  sum = n - (fivehundreds*500) - (twohundreds*200) - (onehundreds*100) - (50*fifty) - (20*twen)
  let ten =Math.floor(sum/10)
  if (n%10 !==0){
    return -1
  }else{
  return fivehundreds + twohundreds + onehundreds + fifty + twen + ten
  }
  }

  /*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/

  function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
  }

