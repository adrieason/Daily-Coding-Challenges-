/*The pair of integer numbers (m, n), such that 10 > m > n > 0, (below 10), that its sum, (m + n), and rest, (m - n), are perfect squares, is (5, 4).

Let's see what we have explained with numbers.

5 + 4 = 9 = 3²
5 - 4 = 1 = 1²
(10 > 5 > 4 > 0)
The pair of numbers (m, n), closest to and below 50, having the property described above is (45, 36).

45 + 36 = 81 = 9²
45 - 36 = 9 = 3²
(50 > 45 > 36 > 0)
With the function closest_pair_tonum(), that receives a number upper_limit, as an upper limit, we should be able to obtain the closest pair to upper_limit, that fulfills the property described above.

The function should return the largest pair of numbers (m, n), satisfying upper_limit > m > n > 0. Note that we say pair A (a0, a1) is larger than pair B (b0, b1) when a0 > b0 or a0 == b0 and a1 > b1*/

function closestPairTonum (n) {
  for (let i = n - 1; i >= 1; i--) {
    for (let j = i - 1; j >= 1; j--) {
      if (Math.sqrt(i + j) % 1 == 0 && Math.sqrt(i - j) % 1 == 0) {
        return [i, j];
      }
    }
  }
  
  return null;
}