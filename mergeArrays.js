/**
 * - In order to implement merge sort, it's useful to first implement
 * a function responsible for merging two sorted arrays
 * - Given two arrays which are sorted, this helper function should
 * create a new array which is also sorted, and consists of all of
 * the elements in the two input arrays
 * - This function should run in O(n + m) time and O(n + m) space
 * and should not modify the parameters passed to it.
 */

/**
 * MERGING ARRAYS PSEUDOCODE
 * - Create an empty array, take a look at the smallest values
 * in each input array.
 * - While there are still values we haven't looked at..
 * - If the value in the first array is smaller than the value
 * in the second array, push the value in the first array
 * into our results and move on to the next value in the first array.
 *
 */

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);
