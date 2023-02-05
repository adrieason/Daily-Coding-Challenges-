/*Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.*/

function covfefe(str){
  //covfefe !
  let count = 0 
  let array = str.split(' ')
  for (i=0;i<array.length;i++){
    if (array[i]==='coverage'){
      array[i]='covfefe'
      count +=1
    }
  }
  if (count===0){
    array.push('covfefe')
  }
  return array.join(' ')
}