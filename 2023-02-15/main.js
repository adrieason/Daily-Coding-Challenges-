/*Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.*/

function arr2bin(arr){
    return arr.reduce((total, value) => (typeof value === 'number' ? total + value : total), 0)
    .toString(2)
}

/*Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.*/

function fizzbuzz(n){
  let arr = []
  for (i=1;i<=n;i++){
    if (i%3===0 && i%5===0){
      arr.push('FizzBuzz')
    }else if (i%3===0){
      arr.push('Fizz')
    }else if (i%5===0){
      arr.push('Buzz')
    }else{
      arr.push(i)
    }
  }
  return arr
}

/*Let's implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }
The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }
If neither keys nor values are specified, then return {}

zipObject()
{}*/

function zipObject(keys = [], values = []) { 
  const obj = {};
  if (keys.length !== 0) {
    keys.forEach((key, indx) => {
      if (Array.isArray(key) && key.length > 1) obj[key[0]] = key[1];
      else {
        obj[key] = indx < values.length ? values[indx] : undefined;
      }
    });
  }

  return obj;
}


/*It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.*/

function joinStrings(string1, string2){
  return `${string1} ${string2}`
}

/*Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.*/

function truncateString(str, num) {
  if (str.length<=num){
    return str
  }else if (num<=3){
    return str.split('').splice(0,num).join('') + '...'
  }else{
    return str.split('').splice(0,num-3).join('') + "..."
  }
  
}

/*Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.*/

function bingo(ticket, win){
  let count = win
  for (i=0;i<ticket.length;i++){
  if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
      count -=1
    }
  if (count<0) return "Winner!"
  else return "Loser!"
}


/*up*/