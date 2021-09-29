// ===============================================================
// Write a function that takes in a string and returns counts of
// each character in the string.
// ===============================================================

//1. separate a string by the indexes. Count the amount of times each letter appears.

// Explore concret examples
// Are we accounting for spaces? Casing? Numbers? Letters that aren't there?
// charCount('aaaa') // {a:4}
// charCount('hello') // {h:1, e:1, l:2, o:1}

function charCount(str) {
  // make object to return at the end
  // loop over string for each character
  // if the char is a number/letter AND is key in object, add one to count
  // if the char is a number/letter AND is not in object, add it object and set value to 1
  // if char is something else (space, period, etc.) don't do anything
  // return object at end
}

function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
//============== refactored ====================

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
