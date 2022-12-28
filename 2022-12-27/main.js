/*This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.
*/

function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow((a.x-b.x),2)+Math.pow((a.y-b.y),2))
}

/*Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.  

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres*/

function converter (mpg) {
  return Math.round(mpg*1.609344/4.54609188*100)/100
}

/*Task
Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.*/

function splitAndMerge(string, separator) {
  let arr = string.split(' ')
  let newArr = []
  for(i=0;i<arr.length;i++){
    newArr.push(arr[i].split('').join(separator))
  }
  return newArr.join(' ')
}

