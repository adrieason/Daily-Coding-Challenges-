
/*Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.*/

var calculate = function (a, o, b) {
    var result = 0;
    
    if(o === "+") { 
      result = a + b;
    }
    
    else if(o === "-") {
      result = a - b;
    }
    
    else if(o === "/" && b !== 0) { 
      result = a / b;
    }
    
    else if(o === "*") {
      result = a * b;
    } else {
      result = null
    }
    
    return result; 
   }