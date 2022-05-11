/*Given an array of integers your solution should find the smallest integer.*/

class SmallestIntegerFinder {
  findSmallestInt(args) {
  return args.reduce((a, b) => Math.min(a, b))
}
}
/*Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0*/

function sequenceSum (begin, end, step) {
  let sum = 0 
  for (i=begin;i<=end;i+=step){
    sum = sum + i
  }
  return sum 
}

/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

*/

var number=function(array){
  let fun = []
  for (i=0;i<array.length;i++){
    fun.push((i+1)+': '+array[i])
  }
  return fun
}