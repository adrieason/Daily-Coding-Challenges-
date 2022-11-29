/*Grasshopper Order of Operations

You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.*/

function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

/*My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.
More examples:
movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)*/

const movie = (card, ticket, perc) => {
  let cnt = 0; //sets count to zero
  while (ticket * cnt <= Math.ceil(card)) { //while the ticket cost is less than the card cost 
    cnt++; //adds one to the countt 
    card += ticket * perc ** cnt;//adds the cost of another ticket to the card
  }
  return cnt; //returns the count
}
  
/*In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!*/

function dup(s) {
  let array = []
  for(i=0;i<s.length;i++){
    let arr = s[i].split('')
    for(j=0;j<arr.length;j++){
      if(arr[j]===arr[j+1]){
        arr[j]=''
      }
    }    
    array.push(arr.join(''))
  }
  return array
};
