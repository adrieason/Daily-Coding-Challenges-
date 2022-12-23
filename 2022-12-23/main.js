/*In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!*/

function fuelPrice(litres, pricePerLitre) {
  let answer = 0
  if (litres<2){
    answer = litres*pricePerLitre
  }else if (litres<4){
    answer = litres*(pricePerLitre-.05)
  }else if (litres<6){
    answer = litres*(pricePerLitre-.1)
  }else if (litres<8){
    answer = litres*(pricePerLitre-.15)
  }else if (litres<10){
    answer = litres*(pricePerLitre-.20)
  }else{
    answer = litres*(pricePerLitre-.25)
  }
  return Math.round(answer*100)/100
}

/*You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291*/

function uniTotal (string) {
  let arr = string.split('')
  if (arr.length===0){
    return 0
  }
  return arr.map(elm=>elm.charCodeAt(0)).reduce((a,b)=>a+b)
}
