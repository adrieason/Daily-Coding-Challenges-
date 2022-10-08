/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.*/

function spinWords(string){
  var final = ""; //holding space for final answer 
  var separate = string.split(" "); //turning string into an array 
  
  for (var i = 0; i < separate.length; i++) { //looping over the sentence 
    if (final) final += ' '; //adds spaces 
    if (separate[i].length >= 5) { //if the words have more than 5 charactors then... 
      final += separate[i].split("").reverse().join(""); //reverses that word 
    } else {
      final += separate[i]; //if it's not 5 caractors or more then it just pushes the word to the sentence 
    }
  }
  return final; //returns the final sentences 
}