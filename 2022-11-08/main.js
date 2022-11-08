/*Write function which will create a string from a list of strings, separated by space.

Example:

["hello", "world"] -> "hello world"*/

function wordsToSentence(words) {
  return words.join(' ')
}

/*Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.*/

function maxMultiple(divisor, bound){

  for (i=bound;i<=bound;i--){
    if(i%divisor===0){
      return i
    }
  }
    
}

/*Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truth-ish, func1 should be called, otherwise call the func2.*/

function _if(bool, func1, func2) {
  if (bool==true){
    func1(true)
  }else{
    func2(false)
  }
}

/*Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)

*/





var buttons = { //creates a button variable 
    
  1: ['1'],
  2: ['A','B','C','2'],
  3: ['D','E','F','3'],
  4: ['G','H','I','4'],
  5: ['J','K','L','5'],
  6: ['M','N','O','6'],
  7: ['P','Q','R','S','7'],
  8: ['T','U','V','8'],
  9: ['W','X','Y','Z','9'],
  0: [' ','0'],
  '*':['*'],
  '#':['#']
    
};
function presses(phrase) {  
  return phrase
    .toUpperCase() //sets everything to uppercase 
    .split('') //splits it into an array 
    .map( //for each element in the array 
      (elm) => Object
                .keys(buttons) //keys of the button 
                .map( 
                  (current) => buttons[current].indexOf(elm) + 1 //
                )
      
    )
    .reduce( 
      (sum,current) => sum + current.reduce( (count,val) => count+val ,0) 
    ,0);
      
}
