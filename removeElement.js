// https://leetcode.com/problems/remove-element/

/** 
Given an integer array nums and an integer val, remove all 
occurrences of val in nums in-place. The relative order of 
the elements may be changed.

Since it is impossible to change the length of the array 
in some languages, you must instead have the result be 
placed in the first part of the array nums. More formally, 
if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. 
You must do this by modifying the input array in-place with O(1) extra memory.
*/

// function removeElement(nums, val) {
//   if (!nums) return 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums.length;
// }

// Without high order array method splice

function removeElement(nums, val) {
  if (!nums) return 0;
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
}

var rmvElement = function (nums, val) {
  while (nums.indexOf(val, 0) >= 0) {
    nums.splice(nums.indexOf(val, 0), 1);
  }
  return nums.length;
};

/**
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Time O(n) - n is the no. of items in nums
 * Space O(1)
 * Optimized run time
 */
var removeElement = function (nums, val) {
  if (!nums.length) {
    // when there is no nums in the array return 0
    return 0;
  }

  if (val === undefined) {
    throw new Error(
      "argument val cannot be undefined for removeElement function"
    );
  }

  let index = 0;

  /* for each items in the given array, check if the val is not equivalent to the val to the removed
   * if yes, then copy that value to the index which we are having as a pointer
   * and then increment the index by 1
   * finally return the index which should hold the number is items in the given array which is not === val
   */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
};
