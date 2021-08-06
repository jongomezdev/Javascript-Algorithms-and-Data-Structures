// Given an integer array nums, return true if any value appears
// at least twice in the array, and return false if every element
// is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) return true;
//     }
//     return false;
//   }
// };

// var containsDuplicate = function (nums) {
//   let memory = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (memory[nums[i]] === undefined) {
//       memory[nums[i]] = i;
//     } else {
//       return true;
//     }
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  nums.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) return true;
  }
};
