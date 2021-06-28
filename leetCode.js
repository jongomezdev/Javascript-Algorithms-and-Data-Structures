// ===============================================================
// Given an array of integers "nums" and an integer "target", return
// indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the  same element twice.
// You can return the answer in any order.
// https://leetcode.com/problems/two-sum/
// ===============================================================

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

// ===============================================================
// Given a 2d grid map of '1's (land) and '0's (water), count the
// number of islands. An island is surrounded by water and is formed
// by connecting adjacent lands horizontally or vertically. You may
// assume all four edges of the grid are all surrounded by water.
// ===============================================================

// Input:
// 11110
// 11010
// 11000
// 00000
// Output: 1

/**
 *  @param {character[][]} grid
 *  @return {number}
 */

// 1. I'm given a grid
// 2. I have to return a number

const numIslands = (grid) => {
  let countIslands = 0;

  for (let rowIndex in grid) {
    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === '1') {
        countIslands++;
        teraform(parseInt(rowIndex), parseInt(colIndex), grid);
      }
    }
  }

  return countIslands;
};

// convert stuff around us to water
const teraform = (rowIn, colIn, grid) => {
  if (
    grid[rowIndex] === undefined ||
    grid[rowIn][colIn] === undefined ||
    grid[rowIn][colIn] === '0'
  )
    return;

  grid[rowIn][colIn] = '0';

  teraform(rowIn + 1, colIn, grid);
  teraform(rowIn - 1, colIn, grid);
  teraform(rowIn, colIn + 1, grid);
  teraform(rowIn, colIn - 1, grid);
};

/** You are given a string s consisting of lowercase English letters. A duplicate removal 
 * consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. 
It can be proven that the answer is unique.
*/

var removeDuplicates = function (s) {
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

/** Input: s = "abbaca"
Output: "ca" */
