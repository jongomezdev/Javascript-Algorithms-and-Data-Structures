// ===============================================================
// Given an array of integers "nums" and an integer "target", return
// indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the  same element twice.
// You can return the answer in any order.
// https://leetcode.com/problems/two-sum/
// ===============================================================

// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// const twoSum = (nums, target) => {
//   let storage = {};
//   for (let [index, num] of nums.entries()) {
//     if (storage[num] !== undefined) return [storage[num], index];
//     storage[target - num] = index;
//   }
// };

//////////////////////////////////////////////////
//
/////////////////////////////////////////////////

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return nums[(i, j)];
//     }
//   }
// }

// Space - O(1)
// Time - O(N^2)

// What can we do to improve this algo?

// Input: nums = [2,7,11,15], target = 9
function twoSum(nums, target) {
  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[target - nums[i]] = i;
    } else {
      return [i, memory[nums[i]]];
    }
  }
}

// The Brute Force
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
