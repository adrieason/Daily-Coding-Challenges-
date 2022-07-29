/*Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x */

function root(x, n) {
  return Math.pow(x,(1/n))
}