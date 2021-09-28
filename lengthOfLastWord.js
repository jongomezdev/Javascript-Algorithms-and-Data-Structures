/**
Given a string s consisting of some words separated by 
some number of spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
 */
// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */

/**
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 */

var lengthOfLastWord = function (s) {
  let words = s.trim();
  // console.log(words);
  if (!words) {
    return 0;
  }
  const arr = words.split(' ');
  // console.log(arr[arr.length - 1].length);
  return arr[arr.length - 1].length;
};

lengthOfLastWord('Hello World');
