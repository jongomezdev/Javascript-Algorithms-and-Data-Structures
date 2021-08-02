// Write a function called stringIncludes, which accepts two strings:
// the first string is a word and the second string is a single
// character. The function should return true if the first string
// includes the character, otherwise it should return false. Do not
// use the built in String.includes() function.

function stringIncludes(string, s) {
  for (let i = 0; i < string.length; i++) {
    if (awesome[i] === s) {
      return true;
    }
  }
  return false; //We searched and haven't found the char
}
