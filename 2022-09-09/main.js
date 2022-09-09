/*No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!*/

function equalize(array){
  let set = array[0]
  let newArr = []
  let finArr = []
  for (i=0;i<array.length;i++){
    newArr.push(array[i]-set)
  }
  for (i=0;i<array.length;i++){
    if (newArr[i]>=0){
      finArr.push("+"+newArr[i])
    }else{
      finArr.push(''+newArr[i])
    }
  }
  return finArr
}
