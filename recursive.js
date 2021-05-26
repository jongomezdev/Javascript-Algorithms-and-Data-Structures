// Recursive countdown
function countDown(num) {
  if (num <= 0) {
    console.log('all done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// Iterative countdown

function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All Done!');
}

function sumRange(num) {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1); // recursive call
}

// Lets say we plugin sumRange(3) we will get an int 6 returned.

//  return 3 + sumRange(2)

// Then sumRange(2) will return 2 + sumRange(1).. then sumRange(1)
// returns 1
