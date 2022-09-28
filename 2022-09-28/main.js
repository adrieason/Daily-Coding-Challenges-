/*John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".*/




function meeting(s) {
  let string = s.toUpperCase().split(';') //makes all the letters in the string upper case and breaks in down into an array split on the , 
                .map(x => x.split(':').reverse().join(', ')) //maps over every element in the array and splits them down into first and last name separated on the ., then reverses them so it goes LAST NAME, FIRST NAME and joins them together on the , 
                .sort() //sorts them in ABC order 
                .join(')(') //joins them together into a string
  return '(' + string + ')'
}
