/*Having two standards for a keypad layout is inconvenient!
Computer keypad's layout:
7 8 9  \n
4 5 6  \n
1 2 3  \n
  0 \n

Cell phone keypad's layout:
1 2 3\n 
4 5 6\n  
7 8 9\n  
  0\n

Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only*/ 

function computerToPhone(numbers){
  let array = numbers.split('')
  let answer = ''
  for (i=0;i<array.length;i++){
    if (array[i]==="7"){
      answer += 1
    }else if (array[i]==="8"){
      answer += 2
    }else if (array[i]==="9"){
      answer += 3
    }else if (array[i]==="1"){
      answer += 7
    }else if (array[i]==="2"){
      answer += 8
    }else if (array[i]==="3"){
      answer += 9
    }else{
      answer += array[i]
    } 
  }
  return answer
}
