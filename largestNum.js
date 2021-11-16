// Write code to return the largest number in the given array
// @param: Array
// @return: number

// function definition
function largestNum(numArray) {
  let currentMax = numArray[0];
  // loop through nums
  for (var i = 0; i < numArray.length; i++) {
    // check if current value at i is hiehger then currentMax
    if (currentMax < numArray[i]) {
      // if so, assign ne max
      currentMax = numArray[i];
    }
  }
  return currentMax;
}

// function call (to test)
console.log('result:', largestNum([1, 2, '22', {}]));
