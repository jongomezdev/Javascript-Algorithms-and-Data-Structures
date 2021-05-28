// What is Sorting?

////////////////////////////////////////////////////////
// Sorting is the process of rearranging the items in a
// collection (e.g. an array) so that the items are in
// some kind of order.
///////////////////////////////////////////////////////

// sort numerically in ascending order
function numCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numCompare);

// sort by length of characters in a string
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

['Gomez', 'Jonathan', 'Data Structures', 'Algorithms'].sort(compareByLen);

///////////////////////////////////////////////////////
//                BUBBLE SORT
///////////////////////////////////////////////////////

// 1. Swapping is really important to bubble sort, comparing indexes.
// 2. The algorithm 'bubbles' the largest values up to the top
// 3. Before we sort we must swap

// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// BubbleSort Pseudocode
// - start looping from the end of the array
//  towards the beginning with a variable called 'i'
// - Start an inner loop with a variable called j from
// the beginning until i - 1
// if arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

//ES5
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([37, 45, 8]);

//ES2015
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
