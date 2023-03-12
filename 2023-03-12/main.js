/*Find the volume of the largest cube that will fit inside a cylinder of given height h and radius r.

Don't round your result. The result needs to be within 0.01 error margin of the expected result.

HINT: There are two cases to consider. Will it be the cylinder's height or the cylinder's radius that determines the maximum size of your cube? An if/else statement might be useful here.*/


function cubeVolume(h, r) {
  return Math.min(h**3, (r*2/Math.sqrt(2))**3 )  
}