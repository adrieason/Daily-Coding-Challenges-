/*Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].*/

//Parameters, Returns, Examples, Pseudocode 

//Parameters: N- number for times  Charlies can  stand to  see a photo 
//Returns: returns a array that contains numbers in the same order but deteles iteams after  n amount of times 
//Example {apples, berries, godkids, apples, apples, apples, berries} N=2...output (apples, berries, godkids, apples,berries)

function deleteNth(arr,n){
  const result = [] //set up an array that holds the final array 
  for (const key of arr) {//sets up a loop over an array 
    const exist = result.filter(item => item === key).length //creates a constant named exist, that is set to filter through the result array, checking if the item equals key. and checks the length of how many items are equal to that element. 
    if (exist && exist === n) {//if exist = true and exit is equal to the number of times that is max, it runs through the loop again 
      continue
    } else {
      result.push(key) //if not, the key gets pushed(added to the end) to the array
    }
  }
  return result //returns the results array 
}