
/*In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ". 
A camera takes a photo of a car if it moves to the direction of the camera.

Task 
Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.*/

function countPhotos(road){
  let result = 0,
      cam_count = 0,
      right_count = 0; //setting variables to 0 

  for (let i = 0; i < road.length; ++i) { //looping over the array of elements 
      if (road[i] == '.') { 
          result += right_count; //sets result equal to the number of cars counted with right 
          cam_count += 1;
      }
      else if (road[i] == '<') {
          result += cam_count; //sets results equal to the number of right camereas 
      }
      else if (road[i] == '>') {
          right_count += 1; //adds one to the right count 
      }
  }
  return result;
}

/*{params} input is a string of ><>< that represent cars and .... that represent cameras. 
{result} return a number of cars that are facing the camera 
{example} >.<.< ==> 5 */