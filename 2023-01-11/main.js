/*In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false*/

function periodIsLate(last, today, cycleLength){
  if( (today-last)/86400000 > cycleLength){
    return true
  }else{
    return false
  }
}

/*A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:

yearDays(2000) returns "2000 has 366 days"
There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.*/

function yearDays(year){
  if (year%4===0){
    if (year%100!==0 || year%400===0){
      return year + " has 366 days"
    }
  }
  
    return year + " has 365 days"
  
}

/*There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.*/

function createDict(keys, values){
  let obj = {}
  for (let i=0;i<keys.length;i++){
    obj[keys[i]]=values[i]
    if(obj[keys[i]]===undefined){
      obj[keys[i]]=null
    }
  }
  return obj
}
