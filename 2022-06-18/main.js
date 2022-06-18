//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove (s) {
  return s[s.length-1] == '!' ? s.slice(0, s.length-1) : s;
}