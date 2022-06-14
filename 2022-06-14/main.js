/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.*/

function noBoringZeros(n) {
  const numStr = String(n).split('');
  
  if (n === 0) {
    return 0;
  }
  
  for (let i = numStr.length-1; i >= 0; i -= 1) {
    
    if (numStr[i] !== '0') {
      return +(numStr.slice(0, i+1).join(''));
    }
  }
}