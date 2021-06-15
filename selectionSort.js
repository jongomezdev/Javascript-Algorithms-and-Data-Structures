/**Similar to bubble sort, but instead of first
 * placing large values into sorted position,
 * it places small values into sorted position
 */

/**
 * SELECTION SORT PSEUDOCODE
 * Store the first element as the smallest value you've seen so far.
 * Compare this item ot the next item in the array until you find a
 * smaller number.
 * If the "minimum" is not the value (index) you initially began
 * with, swap the two values.
 * Repeat with the next element until the array is sorted.
 */

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      // console.log(i, j);
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

selectionSort([2, 3, 4, 5, 34, 22, 10, 19, 17]);
