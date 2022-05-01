/* We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4]. */

function vowelIndices(word){
  let arr = word.split('').map(element => {
  return element.toLowerCase();
});
  let output = []
  for(i=0;i<arr.length;i++){
    if (arr[i]==='a' || arr[i]=== 'e' || arr[i]=== 'i' || arr[i]=== 'o' || arr[i]=== 'u'|| arr[i]==='y'){
      output.push(i+1)
    }
  }
  return output
}

//better 
function vowelIndices(word,a=[]){
  return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
}

/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]*/

function friend(friends){
  let arr = []
  for (i=0;i<friends.length;i++){
    if (friends[i].length === 4){
      arr.push(friends[i])
    }
  }
  return arr
  
}

//better
function friend(friends){
  return friends.filter(n => n.length === 4)
}

/*Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n. */

function filterLongWords(sentence, n) {
  const arr = sentence.split(' ')
  return arr.filter(word => word.length > n)
  }

  /*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

 */

  function filter_list(l) {
    return l.filter(input => typeof input === 'number')
  }

  /*Simple, remove the spaces from the string, then return the resultant string.
*/

  function noSpace(x){
    const arr = x.split(' ').join('')
    return arr
  }