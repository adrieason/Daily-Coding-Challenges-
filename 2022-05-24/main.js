/*Use variables to find the sum of the goals Messi scored in 3 competitions*/ 
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

/*Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true*/ 

function setAlarm(employed, vacation){
  if ((employed === true && vacation === true)||(employed===false)){
    return false
  }else if(employed===true&&vacation===false){
    return true
  }
}