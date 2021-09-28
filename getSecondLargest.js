/**
Function Description

Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:

int nums[n]: an array of integers

Goal: get the second largest number in the array.

 */

function getSecondLargest(nums) {
  // Complete the function
  let first = 0;
  let second = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    }
    if (nums[i] > second && nums[i] < first) {
      second = nums[i];
    }
  }
  return second;
}

console.log(getSecondLargest([1, 2, 3, 4, 5]));
