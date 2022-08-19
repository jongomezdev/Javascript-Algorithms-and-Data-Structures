// Binary search is a much faster form of search, rather than eliminating
// one element at a time, you can eliminate half of the remaining elements
// at a time. Binary search ONLY WORKS ON SORTED ARRAYS!

// DIVIDE AND CONQUER
// We split up the sorted array into two pieces, we pick a pivot
// point (usually in the middle) and we check the left side &
// the right side to see which half the element is at.

// This algorithm should be more efficient than linearSearch -
// you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Write a function called binarySearch which accepts a sorted
// array and a value and returns the index at which the value exists. Otherwise, return -1.

/**
 *
 * @param {*} arr
 * @param {*} elem
 * @returns
 */
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28], 15);

// Binary Search BIG O
// 0 (log n) means 2 to what power gives us N
// Suppose there are 16 elements in an array, log base 2 of 16 = 4
