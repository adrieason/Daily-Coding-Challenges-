//Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
function stringClean(s){
  const newString = s.replace(/\d+/g, '')
  return newString
  }

  //Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

  function grow(x){
    let sum = x[0]
    for (i=1;i<x.length;i++){
      sum = sum*x[i]
    }
    return sum
  }
  //Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    return ((h*60*60)+(m*60)+(s))*1000
  }

  //Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.(In this case, all triangles must have surface greater than 0 to be accepted).


  function isTriangle(a,b,c){
    if (a <= 0 || b <= 0 || c <= 0){
      return false;
      }else if (a+b > c && a+c > b && c+b > a){
                return true;
      }else{
        return false 
      }
  
  
  }
