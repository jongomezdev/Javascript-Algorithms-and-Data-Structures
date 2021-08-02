/**
 * Radix Sort
 *
 * - Radix sort is a special algorithm that works on lists of numbers
 * - It never makes comparisons between elements!
 * - It exploits the fact that information about the size of a number
 * is encoded in the number of digits
 *
 * -In order to implement radix sort, it's helpful to build a few
 * helper functions first.
 */

/**
 * Radix Sort Pseudocode
 *
 * - Define a function that accepts list of numbers
 * - Figure out how many digits the largest number has
 * - Loop from k = 0 up to this largest number of digits
 * - for each iteration of the loop:
 * - create buckets for each digit 0 to 9
 * - Place each number in the corresponding bucket based
 * on it's kth digit
 * - Replace our exisisting array with the values in the bucket,
 * starting with 0 and going up to 9
 * - Return list at th end!
 */

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  // console.log(maxDigitCount);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
