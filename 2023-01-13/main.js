/*Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.*/
function logs(x , a, b){
  return (Math.log(a)/Math.log(x)) + (Math.log(b)/Math.log(x))
}

/*
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).*/

function outed(meet, boss){
    let avg = Object.keys(meet).reduce(function (acc, k) {
        if (k === boss) {
            acc += meet[k] * 2;
        } else {
            acc += meet[k];
        }

        return acc;
    }, 0) / Object.keys(meet).length;


    if (avg <= 5) {
        return 'Get Out Now!'
    } else {
        return 'Nice Work Champ!';
    }
}

/* Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'*/

function boredom(staff){
  let scores = {
  "accounts": 1,
  "finance" : 2,
  "canteen" : 10,
  "regulation" : 3,
  "trading" : 6,
  "change" : 6,
  "IS" : 8,
  "retail" : 5,
  "cleaning" : 4,
  "pissing about" : 25}
  let total = 0
  for (var key in staff){
    total+=scores[staff[key]]
  }
  if (total>=100){
    return 'party time!!'
  } else if (total>80){
    return 'i can handle this'
  }else{
    return 'kill me now'
  }
}

/*The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.*/

function broken(x){
  let arr = x.split('')
  for (i=0;i<arr.length;i++){
    if (arr[i]==='1'){
      arr[i]='a'
    }else{
      arr[i]="b"
    }
  }
    for (i=0;i<arr.length;i++){
    if (arr[i]==='a'){
      arr[i]=0
    }else{
      arr[i]=1
    }
  }
  return arr.join('')
}

/*Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).*/

function meeting(x){
  let y = x.indexOf("O")
  if (y===-1){
    return 'None available!'
  }else{
    return y
  }
}

/*Create a function stringify which accepts an argument list / $list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data / $data / Data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null / NULL / None / nil / nullptr / null() ( all caps or all lowercase depending on the language you are undertaking this Kata in ). For example, given the following list:*/

function stringify(list) {
  let array = []
  while (list!==null){
    array.push(list.data)
    list = list.next
  }
  array.push('null')
  return array.join(' -> ')
}


/*Write a function last that accepts a list and returns the last element in the list.

If the list is empty:

In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null*/

const last = xs => {
  let answer = xs[xs.length-1]
  if (answer===undefined){
    return null
  }else{
    return answer
  }
}

/*Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.*/

var hasCycle = function(head) {
    //lets set equal a new set 
    let set = new Set ()
    //lets current be assigned the value of head 
    let current = head 
    //this is how you traverse a linked list 
    while (current){
        //if a duplicate happens it's turn
        if (set.has(current)){
            return true
        }else{
            //else add current to the set 
           set.add(current)
        }
        //set current equal to the next item in the linked list 
        current = current.next
    }
    //return false because after tranversing the list, nothing is a duplicate 
    return false
};

/*Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.

Good Luck!*/

function convertHashToArray(hash){
  let array = []
  for(let i in hash) {
  array.push([i,hash[i]])
}
  return array.sort()
  }

/*Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _*/
function howManyGifts(maxBudget, gifts){
  gifts = gifts.sort((a,b)=>a-b)
  let cost = 0
  for (i=0;i<gifts.length;i++){
    cost += gifts[i]
    if (cost>maxBudget){
      return i
    }
  }
  return gifts.length
}
