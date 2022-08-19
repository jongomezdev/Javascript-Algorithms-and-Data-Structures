/* 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

// const longestCommonPrefix = (strs) => {
//   for (let i = 0; i < strs[0].length; i++) {
//     tempChar = strs[0].charAt(i);
//     for (let j = 0; j < strs.length; j++) {
//       if (strs[j].length == i || strs[j].charAt(i) != tempChar) {
//         return strs[0].substring(0, i);
//       }
//     }
//   }
//   return strs[0];
// };

// with reduce
var longestCmmonPrefix = function (strs) {
  "use strict";
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};

console.log(longestCmmonPrefix(["flower", "flow", "flopper"]));
