/*You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.*/

function countingValleys(s) {
  let sum = 0
  let val = 0
  let reach = true
  for (i=0;i<=s.length;i++){
    if (s[i]==='D'){
      sum -= 1
    }else if (s[i]==='U'){
      sum +=1
    }
    if(sum<0&&reach===true){
      val += 1
      reach = false
    }else if (sum===0){
      reach = true
    }
  }
  return val
}

//better -- gets it right  

function countingValleys(s) {
  //here we go again
  let level=0;
  let valleys = 0;
  s.split("").forEach(el=>{
    if(level===-1&&el==="U") valleys++;
    if(el==="D") level-=1;
    if(el==="U") level+=1;
  })
  return valleys;
}