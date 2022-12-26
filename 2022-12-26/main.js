/*Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.*/


function saleHotdogs(n){
  if (n<5)
    return 100*n
  else if (n>=10)
    return 90*n
  else
    return 95*n
  
}

/*Terminal Game - Create Hero Prototype
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0*/


function Hero (name) {
  this.name = name || 'Hero'
  this.position = '00'
  this.health = 100
  this.damage = 5
  this.experience = 0 
}

/*You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).*/

function mxdiflg(a1, a2) {
  let num1 = a1.length 
  let num2 = a2.length
  if (num1===0 || num2===0){
    return -1
  }
  let max1 = a1.map(elm=>elm.length).sort((a,b)=>a-b)[a1.length-1]
  let min2 = a2.map(elm=>elm.length).sort((a,b)=>a-b)[0]
  let min1 = a1.map(elm=>elm.length).sort((a,b)=>a-b)[0]
  let max2 = a2.map(elm=>elm.length).sort((a,b)=>a-b)[a2.length-1]
  return [max1-min2,max2-min1].sort((a,b)=>a-b)[1]
}

/*Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.*/

function padIt(str,n){
  while (n>0){
    if(n%2===0){
    str = str + '*'
    }else{
      str = '*'+str
    }
    n -= 1
  }
  return str
}

/*There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free*/

function mango(quantity, price){
  let cost = 0
  for (i=1;i<=quantity;i++){
    if (i%3!==0){
      cost = cost + price
    }
  }
  return cost
}
/*Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"*/

function hello(name) {
    if (name){
    let name1 = name.toLowerCase()
    let name2 = name1.charAt(0).toUpperCase() + name1.slice(1)
    return 'Hello, ' + name2 + '!';
   } else {
      return 'Hello, World!'
    }
    
  }

/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.*/
function divCon(arr) {
  return arr.reduce((acc, value) => {
    if (typeof(value) == 'string') {
      acc.total_string += Number(value)
      acc.total = acc.total_number - acc.total_string
    } else {
      acc.total_number += value
      acc.total = acc.total_number - acc.total_string
    }

    return acc
  }, {
    total_string: 0,
    total_number: 0,
    total: 0
  }).total
}

/*While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.*/


function checkAlive (health) {
  if (health > 0) {
    return true
  } else {
    return false
  }
}
/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(str){
   str = str.toLowerCase();
   const { length } = str;
   const alphabets = 'abcdefghijklmnopqrstuvwxyz';
   const alphaArr = alphabets.split('');
   for(let i = 0; i < length; i++){
      const el = str[i];
      const index = alphaArr.indexOf(el);
      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};

/*Scenario
Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd!alt!alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).*/

function menFromBoys(arr){
 even = [];
 odd = [];
   for(var i = 0; i < arr.length;i++){
   if(arr[i] % 2 == 0){
     if(!even.includes(arr[i]))
     even.push(arr[i])
     } else {
     if(!odd.includes(arr[i]))
     odd.push(arr[i])
     }
   }
 x = (even.sort(function(a,b){return a-b})+","+odd.sort(function(a,b){return b-a}))
 return x.split(",").map(Number)
}

/*There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):

Weekday

Number of trees that must be sprayed on that day

Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

Let cost of all liquid be x

Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

*/

function task(w, n, c) {
  let cost = n*c
  let name
  if (w==='Monday') name="James"
  if (w==='Tuesday') name="John"
  if (w==='Wednesday') name="Robert"
  if (w==='Thursday') name="Michael"
  if (w==='Friday') name="William"
 
  
  return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${cost} dollars to buy liquid`

}
