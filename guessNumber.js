/**
 * 
  We are playing the Guess Game. The game is as follows:

  I pick a number from 1 to n. You have to guess which number I picked.

  Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

  You call a pre-defined API int guess(int num), which returns three possible results:
*
 */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

var guessNumber = function (n) {
  let low = 1,
    high = n,
    mid,
    diff;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    diff = guess(mid);
    if (diff === 0) {
      return mid;
    }
    if (diff === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};
