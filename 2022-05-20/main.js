/*Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

[2, 1, 10]  ->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).*/

function sumOfDifferences(arr) {
  let sum = 0
  let newArr = arr.sort((a,b)=>b-a)
  for (i=0;i<newArr.length-1;i++){
    sum += newArr[i] - newArr[i+1]
  }
  return sum
}

/*In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.*/

function move (position, roll) {
  return position + (2*roll)
}

/*Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.*/
function getRealFloor(n) {
  if (n<=0){
    return n
  }else if (n>0 && n<13){
    return n-1
  }else if (n>13){
    return n-2
  }
}

//better 
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}