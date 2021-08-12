// https://leetcode.com/problems/generate-parentheses/
// Given n pairs of parentheses, write a function
// to generate all combinations of well-formed parentheses.

/**
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
 */

/**
The main idea is to track how many "(" or ")" we need 
to add to strings to make the parentheses well formed.
When we add "(" we need 1 less "(" and 1 more ")",
When we add ")" we need 1 less ")"
 */

const generateParenthesis = (n) => {
  const solution = [];

  const generateCombo = (leftCount, rightCount, str) => {
    if (leftCount > rightCount) return;

    if (!leftCount && !rightCount) {
      solution.push(str);
    }
    if (leftCount > 0) {
      generateCombo(leftCount - 1, rightCount, str + '(');
    }
    if (rightCount > 0) {
      generateCombo(leftCount, rightCount - 1, str + ')');
    }
  };
  generateCombo(n, n, '');
  return solution;
};
