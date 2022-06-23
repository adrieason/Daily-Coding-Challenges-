/*You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.*/ 

function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

/*Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let suitableCode = () => {
    if (enteredCode === correctCode) return true;
    else return false;
  };

  let suitableDate = () => {
    let curDate = new Date(currentDate);
    let expDate = new Date(expirationDate);
    if (curDate <= expDate) return true;
    else return false;
  };
  return (suitableCode() && suitableDate()) ? true : false;
}

/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

*/
function XO(str) {
  let arr = str.split('')
  let xs = 0
  let os = 0
  for (i=0;i<arr.length;i++){
    if (arr[i]==="x"||arr[i]==="X"){
      xs += 1
    }else if (arr[i]==="o"|| arr[i]==="O"){
      os += 1
    }

}
  
return xs === os
  }