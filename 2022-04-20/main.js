/* Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation. */

class Kata {
  static getVolumeOfCuboid(length, width, height) {
  return length*width*height}
}

/*In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.
*/


function findDifference(a, b) {
  let volumeA = a[0]*a[1]*a[2]
  let volumeB = b[0]*b[1]*b[2]
  
  return Math.abs(volumeA - volumeB)
}

/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

*/


var summation = function (num) {
  let sum = 0
  for (i=0;i<=num;i++){
    sum += i
  }
  return sum;
}

/*Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.*/

function litres(time) {
  return Math.floor(time*.5)
}

/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.*/

const areaOrPerimeter = function(l , w) {
  if (l===w){
    return l*w
  }else{
    return l+l+w+w
  }
};

/* Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

function bmi(weight, height) {
  let bmi = weight/(height*height)
  if (bmi <= 18.5){
    return "Underweight"
  }else if(bmi <=25.0){
    return "Normal"
  }else if(bmi <=30.0){
    return "Overweight"
  }else{
    return "Obese"
  }
}