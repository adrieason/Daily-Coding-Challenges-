//Given a number return the closest number to it that is divisible by 10.

const closestMultiple10 = num => {
  return Math.round(num/10)*10
};

//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  let num = health - damage
  if (num<=0){
    return 0
  }else{
    return num
  }
}

/*Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.*/


function rowWeights(array){
  let team1 = 0
  let team2 = 0
  for (i=0;i<array.length;i++){
    if (i%2===0){
      team1 += array[i]
    }else{
      team2 +=array[i]
    }
  }
  let arr = [team1,team2]
  return arr
}

/*Grasshopper - Function syntax debugging

A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.*/

function main (verb, noun){
  return verb + noun
}

//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  let arr = []
  for (i=0;i<word.length;i++){
    if (word[i]===word[i].toUpperCase()){
      arr.push(i)
    }
  }
  return arr
};