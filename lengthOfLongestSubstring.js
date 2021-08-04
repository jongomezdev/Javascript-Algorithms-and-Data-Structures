// Given a string s, find the length of the longest substring without repeating characters.

// var lengthOfLongestSubstring = function (s) {
//   let max_len = 0;
//   let curr = 0;
//   let hash = {};
//   if (s.length < 2) {
//     return s.length;
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (hash[s[i]] == null) {
//       curr += 1;
//     } else {
//       curr = Math.min(i - hash[s[i]], curr + 1);
//     }
//     console.log(hash);
//     max_len = Math.max(max_len, curr);
//     hash[s[i]] = i; //save the index
//   }
//   return max_len;
// };

var lengthOfLongestSubstring = function (s) {
  let win = [];
  let len = 0;
  for (const val of Array.from(s)) {
    if (!win.includes(val)) {
      win.push(val);
      len = Math.max(len, win.length);
    } else {
      win.splice(0, win.findIndex((cur) => cur === val) + 1);
      win.push(val);
    }
  }
  return len;
};
