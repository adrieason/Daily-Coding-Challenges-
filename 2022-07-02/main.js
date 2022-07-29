/*The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.*/ 

function checkExam(array1, array2) {
  let sum = 0
  for (i=0;i<array1.length;i++){
    if (array2[i].length===0){
      sum = sum 
    }else if (array1[i] === array2[i]){
      sum = sum + 4
    }else if (array1[i] !== array2[i]){
      sum -= 1
    }
  }
if (sum<0){
  return 0
}else{
  return sum
}

}

//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  return arr.filter((elem, i) => i < n )
}