// Given an unsorted array of n elements, find if the element k is present in the array or not
// Complete the findNumber function in the editor below. It has 2 parameters:

// 1. An array of integers, arr, denoting the elements in the array.
// 2. An integer, k, denoting the element to be searched in the array.

// The function must return a string "YES" or "NO" denoting if the element is present in the array or not.

function findNumber(arr, k) {
  answer = 'NO';

  for (el of arr) {
    if (el === k) {
      answer = 'YES';
      break;
    }
    console.log(el);
  }
  return answer;
}

console.log(findNumber([1, 3, 5, 6, 8, 2], 0)); // No
