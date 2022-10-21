/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
*/

function isValidIP(string) {
  return string
          .split('.') //splits string into array on the '.'
          .filter((v)=>{return v == Number(v) //changes the element into a number if it can be changed. 
          .toString() && Number(v)<256 && Number(v) >= 0}) //if the number is greater than or equal to 0 and less than 255 return true 
          .length==4;//if the length is 4 returns true. 
}

