/*Given a node object representing a binary tree:

Node:
  value: <int>,
  left: <Node> or null,
  right: <Node> or null
write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

Examples:

10
| \
1  2
=> 13

1
| \
0  0
    \
     2
=> 3*/
// return the sum of all values in the tree, including the root
function sumTheTreeValues(root){
  if (root===null) return []
  const results = []
  const stack = [root];
  while(stack.length>0){
    const current = stack.pop();
    results.push(current.value)
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return results.reduce((a,b)=>a+b)
}

/*Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.
smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21
*/ 

function smartSum(){
 return Array.from(arguments).reduce((sum, value) => { //this creates an array from the arguments that are input
    if (Array.isArray(value)) { //if the array is a value 
      sum += smartSum.apply(this, value) //then recursively apply (not call) this and add on to it 
    } else {
      sum += Number(value) //if not add the number 
    }

    return sum
  },0)
}

/*Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"*/

function trim(str, size) {
  if (str.length<=size){
    return str
  }
  if (str.length<4){
  return str.slice(0, size)+'...'
  }

  let num = size - 3 -str.length
  return str.slice(0, size-3)+'...'
}
