/**
 * - Break up the array into halves until you have arrays that
 * are empty or have one element
 * - Once you have smaller sorted arrays, merge those arrays
 * with other sorted arrays until you are back at the full
 * length of the array
 * - Once the array has been merged back together, return
 * the merged (and sorted) array.
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
      results.push(arr2[j]);
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

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  // split the array in half
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

/**
 * Recursive solution:
 */

function mergeTwoLists(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  [l1, l2] = [l1, l2].sort((a, b) => a.val - b.val);
  console.log(l1);
  l1.next = mergeTwoLists(l1.next, l2);
  return l1;
}

// Normal solution

var mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    console.log('l1 is null, returning l2: ', l2);
    return l2;
  } else if (l2 == null) {
    console.log('l2 is null, returning l1: ', l1);
    return l1;
  } else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    console.log('return l1: ', l1);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    console.log('return l2: ', l2);
    return l2;
  }
};
