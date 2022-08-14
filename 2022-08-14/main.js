/*Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.*/

function combineNames(name1,name2){
  return name1 +" "+name2
}

/*Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'*/

function switcheroo(x){
  let b = x.split('')
  let y = []
  for(i=0;i<=b.length;i++){
    if(b[i]==='b'){
      y.push('a')
    }else if (b[i]==='a'){
      y.push('b')
    }else if (b[i]==='c'){
      y.push('c')
    }
  }
  return y.join('')
}