/*There are no explanations. You have to create the code that gives the following results in Python, Ruby, and Haskell:

one_two_three(0) == [0, 0]
one_two_three(1) == [1, 1]
one_two_three(2) == [2, 11]
one_two_three(3) == [3, 111]
one_two_three(19) == [991, 1111111111111111111]
And it should give the following results in Javascript, Scala, D, Go, and Rust:

oneTwoThree(0) == ['0', '0']
oneTwoThree(1) == ['1', '1']
oneTwoThree(3) == ['3', '111']
oneTwoThree(19) == ['991', '1111111111111111111']
In C, the results are to be assigned to seperate pointers.
*/

function oneTwoThree(n) {
  //create array 
    let num = n.toString()
    let array = []
    if (n===0){
      return ['0','0']
    }else{
      array.push('1'.repeat(n))
      if(n<10){
        array.unshift(num)
      }if(n>9){
        array.unshift(num[1].repeat(2)+num[0])
      }if(n>99){
      }
    }  
    return array
  }
  
  // 0 = [0,0]
  // 1 = [1,1]
  // 19 = [991,1111111111111]


  //I didn't get the code correct. Here is the correct solution. 
  function oneTwoThree(n) {
    if (n==0) //if n is 0 then just return the answer is [0,0]
      return ['0','0']
    var s=''; //set empty strings 
    var c=''
    for (var i=0; i<n; ++i) //loops through for number 
      s+='1'; //adds '1' to the string
    while (n>9)//if it's less than 9 add '9' to c and subtract that 9 from n 
    {
      c+='9';
      n-=9;
    }
    if (n!=0) //if n is not 0, add n to c
      c+=n
    return [c,s]; return //c,s as an array
}