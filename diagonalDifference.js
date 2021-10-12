// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// The left-to-right diagonal = 1 + 5 + 9 = 15.
// The right-to-left diagonal = 3 + 5 + 9 = 17.
// Their absolute difference is |15 - 17| = 2.

```
1 2 3
4 5 6
9 8 9   
```;

function diagonalDifference(arr) {
  // Write your code here
  let a = 0;
  let b = 0;
  let count = arr.length;

  for (let i = 0; i < arr.length; i++) {
    a += arr[i][i];
  }

  for (let i = 0; i < arr.length; i++) {
    count--;
    b += arr[i][count];
  }

  return Math.abs(a - b);
}
