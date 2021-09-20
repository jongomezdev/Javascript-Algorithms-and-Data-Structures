// https://leetcode.com/problems/plus-one/

/**
 Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
 */

/**
 First we add 1 to the last element.
Then, we iteratively check starting from least significant 
to most significant if the digit is a 10.
If it is, we set it to 0 and to the digit before it we add 1.
Once we are done with this, we update the first 
digit if it's a 10, adding a digit of 1 in front of it.
 */

const plusOne = (digits) => {
  const last = digits.length - 1;
  digits[last]++;
  for (let i = last; i > 0 && digits[i] === 10; i--) {
    digits[i] = 0;
    digits[i - 1]++;
  }
  if (digits[0] === 10) {
    digits[0] = 0;
    digits.unshift(1);
  }
  return digits;
};
