
/*Imagine you are trying to roll a ball a certain distance down a road. The ball will have a starting speed that slowly degrades due to friction and cracks in the road. Every time the ball rolls a distance equal to its speed or rolls over a crack, its speed decreases by 1. Given a speed of s which the ball starts rolling, and a roadmap r of the street represented by a string, return whether or not the ball will be able to make it past the end of the road (True or False).

*/
//wrong 
function ballTest(s, r) {
  let arr = r.split('')
  for (i=0;i<arr.length;i++){
    if(arr[i]=="x"){
      s = s-1
    }
    if(i+1==s){
      s=s-1
    }
  }
  if (s>0){
    return true
  }else{
    return false
  }
}

//right 
function ballTest(s, r) { 
  let cracks = 0; //sets cracks = 0
  let distance = 0; sets distance 
  for (let i = 0; i < r.length; i++) { //loops over the road 
    distance++ //adds 1 to distance each loop 
    if (r[i] === "x") {
      cracks++ //if r is a crack add one 
    }
    if (distance === s) { //if distance is equal to the speed 
      if (i !== r.length - 1) { //and i is not equal to the length 
        s -= cracks + 1; //sub cracks and distance to the speed  
        cracks = 0;
        distance = 0;
      }

    }
  }
  return s > 0 //if the speed is under one return false
}

//params/results: input will be a speed (Number) and a string that represents a road with _ and x. x represents a bump.Speed decreases by one with every bump. Every time the ball rools a distance equal to its speed they speed decreases by one. output is true or false to show if the ball is still running at the end. 
//example: 100, _ => true because ball still rolling. 
//example: 24, ___x__x => true
//example: 10, xxxxxxxxxxxx =>false
