/*The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

If you forgot how to push an element to an array, please refer to lesson 4.*/

function pickIt(arr){
  var odd=[],even=[];
  for(i=0;i<arr.length;i++){
    if (arr[i]%2===0){
      even.push(arr[i])
    }else{
      odd.push(arr[i])
    }
  }
  
  return [odd,even];
}

/*Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113*/

hexHash=a=>[...a].map(a=>a.charCodeAt().toString(16)).join``.split``.reduce((a,b)=>+b?a+ +b:a,0)

/*In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
More examples in the test cases.

Good luck!

Please also try Simple time difference*/



function pairs(ar){
  let count = 0 
  let num = Math.floor(ar.length/2)
  for (i=0;i<ar.length;i++){
    let u = i*2
    if(ar[u]===ar[u+1]+1 || ar[u]===ar[u+1]-1){
      count += 1
    }
  }
  return count
};
