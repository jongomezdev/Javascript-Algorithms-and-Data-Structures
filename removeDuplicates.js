/** You are given a string 's' consisting of lowercase English letters. A duplicate removal 
 * consists of choosing two adjacent and equal letters and removing them.

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
