/* The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.*/

function newAvg(arr, newavg) {
    let totalSum = newavg*(arr.length+1)
    let newSum = arr.reduce((a,b)=>a+b)
    let num = Math.ceil(totalSum-newSum)

    if (num>=0){
      return num
    }else{
      throw("Expected New Average is too low");
    }
}


function newAvg(arr, newavg) {
    if (arr.length === 0) return newavg;
    const actualAvg = arr.reduce((a,c) => a+c, 0) / arr.length;
    const amtToAdd = Math.ceil(arr.length * (newavg - actualAvg) + newavg); 
    if (amtToAdd > 0) return amtToAdd; else throw ('Expected New Average is too low');
}

##1 - Factorial

/* In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example*/ 

const factorial = n => {
    if (n == 0) {
        return 1;
    }

    else {
        return n * factorial(n - 1);
    }
}
