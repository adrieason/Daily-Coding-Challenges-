/*You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.*/ 

function search(budget, prices) {
  let arr = []
  for (i=0;i<prices.length;i++){
    if (prices[i]<=budget){
      arr.push(prices[i])
    }
  }
  return arr.sort((a,b)=>a-b).join(',')
}

/*Given a number as an input, print out every integer from 1 to that number. however , when the integer is divisible by 3 print out fizz, when it’s divisible by 5, print out buzz, when it's divisible by both 3 and 5 print fizz buzz*/

//param - input is a number, output is a string 
//result - printing to the console log fizz or buzz or fizzbuzz or nothing for each number 1 through the number input
//example n=6… fizz, buzz, fizz 

function fizzy(n){
for (i=1; i<=n; i++){
if (i%3===0 && i%5===0){
console.log(fizzbuzz)
}else if (i%3===0){
console.log(buzz)
}else if (i%5===0){}
console.log(fizz)
}
return arr 
}
