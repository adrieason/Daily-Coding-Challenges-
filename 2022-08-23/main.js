/*Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%*/

function calculateTip(amount, rating) {
  if (rating.toLowerCase()==="excellent"){
    return Math.ceil(amount*.2)
  }else if (rating.toLowerCase()==="great"){
    return Math.ceil(amount*.15)
  }else if (rating.toLowerCase()==="good"){
    return Math.ceil(amount*.1)
  }else if(rating.toLowerCase()==="poor"){
    return Math.ceil(amount*.05)
  }else if (rating.toLowerCase()==="terrible"){
    return 0
  }else{
    return 'Rating not recognised'
  }
}