/*You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...

In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.

In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.*/ 

function toFreud(string) {
  return string.replace(/\S+/g, 'sex');
}

/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.*/
function fakeBin(x){
  let newArr = x.split('')
  let result = []
  for (i=0;i<newArr.length;i++){
    if (Number(newArr[i])<5){
      result.push(0)
    }else if(Number(newArr[i])>=5){
      result.push(1)
    }
  }
  return result.join('')
  }
/*Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution */

  function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter((birdtypes)=>!geese.includes(birdtypes))
  };

  /*JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.*/

  function getEvenNumbers(numbersArray){
    return numbersArray.filter((num)=> num%2===0)
  }