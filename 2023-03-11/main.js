/*Input data:

The function receives a parameter n, which indicates the maximum number of points on one domino tile.

Test values are 0 < n < 1000

Output data:

Your function should return the optional number of diamond stones to be made for a given set of dice.*/

function dotsOnDominoBones(n){
    let sum = 0;
    for(let i=0; i<=n; i++) {
        for(let j=i; j<=n; j++) {
            sum += i + j;
        }
    }
    return sum;
}