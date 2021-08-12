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
