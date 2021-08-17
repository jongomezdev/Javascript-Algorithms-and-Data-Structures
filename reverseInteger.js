/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit
 * integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit
 * integers (signed or unsigned).
 */

const reverse = (x) => {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  console.log(n, 'hi');
  console.log(k, 'hey');
  return n > limit ? 0 : n * k;
};

reverse(123);

const reversedNum = (num) =>
  parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
