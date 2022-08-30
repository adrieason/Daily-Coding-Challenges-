/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/

function solution(str){
  let arr = []
   for (i=0;i<(str.length-1);i++){
     if (i%2===0){
            arr.push(str[i]+str[i+1])
     }
   }
  if (str.length%2===1){
    arr.push(str[str.length-1]+"_")
  }
  return arr
}

/*Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead*/

function bump(x){
  let count = 0 
  for(i=0;i<x.length;i++){
    if (x[i]==="n"){
      count +=1
    }
  }
if (count<16){
  return "Woohoo!"
}else{
  return "Car Dead"
}
}