/**
 Given an integer array nums, return an array answer 
 such that answer[i] is equal to the product of all the 
 elements of nums except nums[i].
 The product of any prefix or suffix of nums is guaranteed 
 to fit in a 32-bit integer.
 You must write an algorithm that runs in O(n) time 
 and without using the division operation.
 */

// First calculate the product of the right side,
// the right array(answer) doesn't count in the space cost,
// as mentioned in description right[i] -> the product on right side

var productExceptSelf = function (nums) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
  var right = Array(nums.length).fill(1);
  for (var i = 1; i < nums.length; i++) {
    right[nums.length - 1 - i] = right[nums.length - i] * nums[nums.length - i];
  }
  var left = 1;
  for (var i = 0; i < nums.length; i++) {
    right[i] = left * right[i];
    left = left * nums[i];
  }
  return right;
};
