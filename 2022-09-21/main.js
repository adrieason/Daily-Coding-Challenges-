/*Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)*/


const solution = (start, finish, memo = {}) => {
  if (start > finish) return Infinity;
  if (start === finish) return 0;
  if (!memo[start]) memo[start] = 1 + Math.min(solution(start + 1, finish, memo), solution(start + 3, finish, memo));
  
  return memo[start];
};
