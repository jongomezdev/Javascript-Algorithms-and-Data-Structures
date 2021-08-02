// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Hash map for keeping track of mappings. This keeps the code very clean.
  // Also makes adding more types of parenthesis easier
  let closeMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // The stack to keep track of opening brackets.
  let charStack = [];

  // validate input
  if (s === null || s === undefined) return false;

  for (var i = 0; i < s.length; i++) {
    let curChar = s.charAt(i);
    let topElement;
    if (closeMap[curChar] !== undefined) {
      topElement = charStack.length === 0 ? '#' : charStack.pop();
      if (topElement !== closeMap[curChar]) return false;
    } else {
      charStack.push(curChar);
    }
  }
  return charStack.length === 0;
};
