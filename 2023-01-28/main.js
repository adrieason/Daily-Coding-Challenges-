/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.*/ 

function toCamelCase(str){
    str = str.split(''); //creates an array split on each letter 
    return str.map(function(el, i){ //maps over everyletter in the array, i is the counter starts at 0?
      if(el == '-' || el == '_'){ //if the letter is - or _
        el = str[i+1].toUpperCase(); //the next letter will be uppercase
        str.splice(i+1, 1); //remove the - or _ from the array 
      }
      return el; //returns the letter into the array 
    }).join(''); //joins all the letters together 
  }