// https://leetcode.com/problems/word-break/

/**
 Given a string s and a dictionary of strings wordDict, 
 return true if s can be segmented into a space-separated 
 sequence of one or more dictionary words.

 Note that the same word in the dictionary may be 
 reused multiple times in the segmentation.
 */

/**
  Input: s = "leetcode", wordDict = ["leet","code"]
  Output: true
  Explanation: Return true because "leetcode" can be segmented as "leet code".
  */

function wordBreak(word, wordDict) {
  return verifyBreak(word, wordDict, 0);
}

function verifyBreak(word, dic, start) {
  if (start === word.length) return true;

  for (let end = start + 1; end <= word.length; end++) {
    let guess = word.substring(start, end);

    if (dic.includes(guess) && verifyBreak(word, dic, end)) {
      return true;
    }
  }
  return false;
}

//   function wordBreak (s, wordDict) {
//   //dp[i] represents whether s.slice(0, i) can be composed by words in wordDict
//   var dp = Array(s.length + 1).fill(false);
//   dp[0] = true;
//   for(var i = 1; i <= s.length; i++) {
//       for(var word of wordDict) {
//           if(i >= word.length && s.slice(i - word.length, i) === word) {
//               dp[i] = dp[i - word.length] || dp[i];
//           }
//       }
//   }
//   return dp[s.length];
// };
