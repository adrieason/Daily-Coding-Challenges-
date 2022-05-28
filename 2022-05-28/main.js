/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.*/


function check(a, x) {
  return a.includes(x) ? true : false; 
}


//Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
  if (p1===p2){
    return "Draw!"
  }else if((p1==='rock' && p2==='scissors')||(p1==='scissors'&&p2==='paper')||(p1==='paper'&&p2==='rock')){
    return 'Player 1 won!'
  }else{
    return 'Player 2 won!'
  }
};
