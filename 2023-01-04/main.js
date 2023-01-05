/*DESCRIPTION:
A cyclops number is a number in binary that is made up of all 1's, with one 0 in the exact middle. That means all cyclops numbers must have an odd number of digits for there to be an exact middle.
A couple examples:
101
11111111011111111
You must take an input, n, that will be in decimal format (base 10), then return True if that number wil be a cyclops number when converted to binary, or False if it won't.
Assume n will be a positive integer.*/ 

const cyclops =(n, b=n.toString(2).split('0'))=> b.length==2 && b[0]==b[1]
