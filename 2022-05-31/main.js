/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.*/

function validatePIN (pin) {
  if ((pin.length === 4 || pin.length === 6) && Number.isInteger(+pin)) {
    return true
  } else {
    return false
  }
}

/*You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).*/

function billboard(name, price = 30){
  let newName = name.split('').length
  let num = 0
  for(i = 0; i < newName; i++){
          num += price

  }

  return num
  }

