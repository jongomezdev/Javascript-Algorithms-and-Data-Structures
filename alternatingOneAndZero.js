/*
 * There are N coins, each showing either heads or tails.
 * Make the coins to form a sequence of alternating heads or tails.
 * What is the minimum number of coins that must be reversed to achieve this?
 */

/**
 * Reverses a bit. Returns 1 if 0 is provided and vice versa.
 */

const reverse = (bit) => {
  return bit === 0 ? 1 : 0;
};

/**
 * Gets total number of reversals required if we were to transform
 * provided array into an alternating sequence.
 * Expected = 0 or 1
 */

const getReversals = (arr, expected) => {
  let reversals = 0;

  arr.forEach((digit) => {
    if (expected !== digit) {
      reversals++;
    }

    expected = reverse(expected);
  });

  return reversals;
};

/**
 * Returns minimum number of reversals required to form
 * a sequence of alternating bits
 */

const getMinimumReversals = (arr) => {
  return Math.min(getReversals(arr, 0), getReversals(arr, 1));
};
