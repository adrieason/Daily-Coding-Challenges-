/*Given the molecular mass of two molecules M1M_1M 
1
​
  and M2M_2M 
2
​
 , their masses present m1m_1m 
1
​
  and m2m_2m 
2
​
  in a vessel of volume VVV at a specific temperature TTT, find the total pressure PtotalP_{total}P 
total
​
  exerted by the molecules. Formula to calculate the pressure is:

Ptotal=(m1M1+m2M2)RTV\LARGE P_{total} = {{({{m_1} \over {M_1}} + {{m_2} \over {M_2}}) R T} \over V}P 
total
​
 = 
V
( 
M 
1
​
 
m 
1
​
 
​
 + 
M 
2
​
 
m 
2
​
 
​
 )RT
​
 
Input
Six values :

M1M_1M 
1
​
 , M2M_2M 
2
​
 : molar masses of both gases, in grams (ggg)
m1m_1m 
1
​
  and m2m_2m 
2
​
 : present mass of both gases, in  g⋅mol−1\ g \cdot mol^{-1} g⋅mol 
−1
 
VVV: volume of the vessel, in  dm3\ dm^3 dm 
3
 
TTT: temperature, in  °C\ \degree C °C
Output
One value: PtotalP_{total}P 
total
​
 , in units of atmatmatm.

Notes
Remember: Temperature is given in Celsius while SI unit is Kelvin (KKK).  0°C=273.15K\ 0\degree C = 273.15K 0°C=273.15K

The gas constant  R=0.082dm3⋅atm⋅K−1⋅mol−1\ R = 0.082dm^3 \cdot atm \cdot K^{-1} \cdot mol^{-1} R=0.082dm 
3
 ⋅atm⋅K 
−1
 ⋅mol 
−1*/

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return (((givenMass1/molarMass1)+(givenMass2/molarMass2))*0.082*(temp+273.15))/volume
}

/*Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)*/

function generateRange(min, max, step){
  let array = []
  for(i=min;i<=max;i+=step){
    array.push(i)
  }
  return array 
}

/*This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.*/

const solve = (x, y) => x // y

/*We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

For example:
Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.

DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price*/

function discoverOriginalPrice(discountedPrice, salePercentage){
  return  Math.round(((discountedPrice / (1 - salePercentage/100) * salePercentage / 100) +discountedPrice)*100)/100
}
