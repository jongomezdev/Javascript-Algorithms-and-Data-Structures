/** You are given a string 's' consisting of lowercase English letters. 
A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on 's' until we no longer can.

Return the final string after all such duplicate removals have been made. 
It can be proven that the answer is unique.
*/

const removeDuplicates = (s) => {
  let storage = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == storage[storage.length - 1]) {
      storage.pop();
    } else {
      storage.push(s[i]);
    }
  }
  return storage.join('');
};

/**
 * Input: s = "abbaca"
 * Output: "ca"
 */

// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 Given an integer array nums sorted in non-decreasing order, 
 remove the duplicates in-place such that each unique element 
 appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in 
some languages, you must instead have the result be placed 
in the first part of the array 'nums'. More formally, if there 
are 'k' elements after removing the duplicates, then the first 
'k' elements of nums should hold the final result. It does not 
matter what you leave beyond the first 'k' elements.

 */

/**
 *
 * @param {*} nums
 * @returns int
 */

var removeDuplicates = function (nums) {
  let len = nums.length;
  if (len == 0) {
    return 0;
  }
  let insertIndex = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};

// removeDuplicates([0, 0, 2, 2, 3, 3, 4]);
