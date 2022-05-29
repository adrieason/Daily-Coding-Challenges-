/*In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. */

//{parameter} a string gets passed into the function 
//{results} an array with that string over and over, with different letters capitalized, for exampe in the first element, the first letter will be capitilized 
//{example} bye => [Bye, bYe, byE]
//{psedo}

function wave(str){
  let wave = []; //creates the array that all the words will be pushed into
  for(let i = 0; i < str.length; i++) {//creates a loop that will go through all the elements in the array 
    let letter = str[i];//sets letter equal to the nth letter in the string
    if (letter === " ") {//if there is no letter in that space it continues through the string 
      continue;
    } else {
      wave.push(str.slice(0, i)/*selects a start and end of what is being added*/+ letter.toUpperCase()/*adds the selected letter and makes it caps*/ + str.slice(i + 1))/*add the rest of the word from the range given*/
    } 
  }
  return wave;
}

