// Given two integers, l and r, print all the odd numbers between l and r (l and r inclusive).
// Complete the oddNumbers function in the editor below. It has 2 parameters:
//   1. An integer, l, denoting the left part of the range.
//   2. An integer, r, denoting the right part of the range.
// The function must return an array of integers denoting the odd numbers between l and r.

function oddNumbers1(l, r) {
  let numbers = [];

  if (l % 2 == 1) {
    numbers.push(l);
  }
  if (l < r) {
    for (let i = l + 1; i < r; i++) {
      if (i % 2 == 1) {
        numbers.push(i);
      }
    }
    if (r % 2 == 1) {
      numbers.push(r);
    }
  }

  return numbers;
}

console.log(oddNumbers1(2, 15));

///////////////////////////////////////////////////////////////////////////////////////

function oddNumbers(l, r) {
  let numbers = [];
  if (l % 2 == 0) l += 1;

  while (l <= r) {
    numbers.push(l);
    l += 2;
  }
  return numbers;
}

console.log(oddNumbers(2, 15));
