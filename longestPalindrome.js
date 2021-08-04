var longestPalindrome = function (s) {
  let subStr = '';
  // inside the for loop we will check if it satisfies 2 conditions (odd or even)
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    console.log(`initial ${left} & ${right}`);

    // odd length
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > subStr.length) {
        subStr = s.substring(left, right + 1);
        console.log(subStr);
      }
      left--;
      right++;
    }
    // even length
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > subStr.length) {
        subStr = s.substring(left, right + 1);
      }
      left--;
      right++;
    }
  }
  return subStr;
};
