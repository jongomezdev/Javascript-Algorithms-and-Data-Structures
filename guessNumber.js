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
