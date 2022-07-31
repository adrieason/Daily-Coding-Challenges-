//Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n){
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

//Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

function removeRotten(a){
  return (a||[]).map(x=>x.replace('rotten','').toLowerCase())
}

//It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

//Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

//If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

//Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  if (bonus===true){
    return "£"+salary*10
  }else{
    return "£"+salary
  }
}