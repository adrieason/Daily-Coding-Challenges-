/*Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.

*/

function sumNoDuplicates(numList) {
    let counts = {};
  
    for (let i = 0; i < numList.length; i++) {
      let num = numList[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  
    let sum = 0;
    for (let num in counts) {
      if(counts[num] === 1) {
        sum += Number(num);
      }
    }
  
    return sum;
  }