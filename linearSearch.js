// There are many different search methods on arrays in JavaScript:
// - indexOf
// - includes
// - find
// - findIndex

// How do these functions work?
// They search one item at a time, either starting at the begining or end and moving the opposite way.

// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

linearSearch([34, 56, 1, 2], 1);
