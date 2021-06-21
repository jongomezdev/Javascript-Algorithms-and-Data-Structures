/** Insertion sort builds up the sort by gradually
 * creating a larger left portion which is always sorted.
 * - Start by picking the second element in the array
 * - Now compare the second element with the one before it and
 * swap if necessary
 * - Continue to the next element and if it is in the incorrect
 * order, iterate through the sorted portion to pladce the elem
 * in the correct place
 */

// Worst case O (N^2)

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
