/*100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.*/


function mirror(text){
    let wordArr = text.split(" "); //sets text into an array split on the space 
    let stars = "" //holder for the top row and bottom row stars
    let reversedArr = []; //holder for the reversed array 
    let longest = wordArr.reduce( //finds the longest word in the wordArr array, so that we can fill in the number of stars 
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    );
    
    
    for(let i=0; i<wordArr.length; i++){ //loops over all of the items in the array wordArr
      const space = (longest.length - wordArr[i].length); //finds the space between the words 
      
        reversedArr.push("* "+ wordArr[i].split("").reverse().join("") + " ".repeat(space) + " *") //pushes all of the rows into arrays 
      
    
    }
             stars = "*".repeat(longest.length+3) //sets stars for top and bottom row into a variable 
    
            
    
      return stars + "*\n" + reversedArr.join("\n") +"\n*"+ stars //brings everything together into an array that holds all of the words! 
      
    }
    