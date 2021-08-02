/**
 * QUICK SORT
 *
 * - Like merge sort, exploits the fact that arrays
 * of 0 or 1 element are always sorted.
 * - Works by selecting on element (called the 'pivot')
 * and finding the index where the pivot should
 * end up in the sorted array.
 * - Once the pivot is position appropriately, quick sort
 * can be applied on either side of the pivot.
 */

/**
 * - In order to implement merge sort, to implement merge
 * sort, it's useful to first implement a function responsible
 * for arranging elements in an array on either side of a pivot.
 *
 * - Given an array, this helper function should designate an element as the pivot.
 *
 * - It should then rearrange elements in the array so that all values less than
 * the pivot are moved to the left of the pivot, and all values greater to the right.
 *
 * - The order of elements on either side of the pivot does not matter.
 *
 * - The helper should do this in place,that is, it should not create a new array
 *
 * - When complete, the helper should return the index of the pivot.
 *
 * - The runtime of quick sort depends in part on how one selects the pivot.
 *
 * - Ideally, the pivot should be chosen so that it's roughly the median
 * value in the data set you're sorting.
 */

/**
 * Pivot Pseudocode
 *
 * - It will help to accept three arguments: an array, start index and end index.
 * - Grab the pivot from the start of the array.
 * - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
 * - Loop through the array from the start until the end
 * - If the pivot is greater than the current element, increment the pivot index variable and then
 * swap the current element with the element at the pivot index.
 * - Swap the starting element (i.e. the pivot) with the pivot index
 * - Return the pivot index.
 */

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  // console.log(arr);
  // console.log(swapIdx);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

/**
 * Quicksort Pseudocode
 *
 * - Call the pivot point on the array
 * - When the helper returns to you the updated
 * pivot index, recursively call the pivot helper on
 * the subarray to the left of that index, and the
 * subarray to the right of that index.
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([4, 6, 9, 1, 2, 5, 3]);
