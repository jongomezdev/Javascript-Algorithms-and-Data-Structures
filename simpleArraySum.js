/**
Given an array of integers, find the sum of its elements.
For example, if the array nums = [1,2,3].. 1 + 2 + 3 = 6 so return 6.
Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
 */

function simpleArraySum(nums) {
  let result = 0;
  // for (number of nums) {
  //   result = result + number;
  // }
  for (let i = 0; i < nums.length; i++) {
    result = result + nums[i];
  }
  return result;
}

console.log(simpleArraySum([1, 3, 10, 50]));
