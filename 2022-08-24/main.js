/*Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?” 

Where x <= 1000 and y <=1000

#Task

Assuming there are no other types of animals, work out how many of each animal are there*/

function animals(heads, legs) {
  const cows = legs / 2 - heads;
  const chickens = heads - cows;
  
  if (legs & 1 || chickens > heads || cows > heads)
    return "No solutions";
  else
    return [chickens, cows];
}