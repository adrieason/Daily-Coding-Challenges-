/*You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.*/

function crap(x, bags, cap){
  let flat = x.flat() //flattens the array 
  let count = 0 //sets a count to zero for the amount of crap in the yard 
  if (flat.includes("D")===true){ //if D is in the array return Dog!! 
    return 'Dog!!'
  }else{
    for(i=0;i<=flat.length;i++){ //loops through the array to count the number of crap in yard 
      if(flat[i]==='@'){
        count+=1
      }
    }
  }
  if (count<=bags){ //if there is more bags than crap return clean 
    return "Clean"
  }else{
    return "Cr@p" //else return crap 
  }
}

//better 
function crap(x, bags, cap){
  var yard = x.reduce( (a, b) => a.concat(b) ); //flattens the array completely (more than mine did)
  return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p'; //if D is in the array return Dog!!... else take the bags times the capacitty of the bags. filter the arrray so that it onnly contains crap. subtract the length from (capactity*bag). If it's more than 0 return clean, else return false 
}