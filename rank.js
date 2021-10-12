function maxTickets(tickets) {
  // m = size of subsequence
  // s = subsequence
  // determine the max length of a subsequence in which the difference between any elements (in a sorted list) is either 0 or 1
  // ex: tickets = [8, 5, 4, 8, 4]
  // valid subsequences = [4, 4, 5] and [8, 8]
  // m = 3 and 2
  // 3 is the longest so 3 would be the returned value
  let m = 0;
  let sortedTickets = tickets.sort((a, b) => a - b);
  let cache = Array(sortedTickets.length).fill(1);
  let previous = 0;
  let current = 1;
  while (previous < sortedTickets.length) {
    if (Math.abs(sortedTickets[previous] - sortedTickets[current]) <= 1) {
      const newSubsequence = cache[previous] + 1;
      if (newSubsequence > cache[current]) {
        cache[current] = newSubsequence;
      }
    }
    previous++;
    if (previous === current) {
      current++;
      previous = 0;
    }
  }

  m = cache.sort((a, b) => a - b);
  return m[m.length - 1];
}

function toolchanger(tools, startIndex, target) {
  let idx = startIndex;
  let rightSide = 0,
    leftSide = 0;
  while (tools[idx] !== target) {
    idx++;
    rightSide++;
    if (idx === tools.length) idx = 0;
  }
  idx = startIndex;
  while (tools[idx] !== target) {
    idx--;
    leftSide++;
    if (idx === -1) idx = tools.length - 1;
  }
  return Math.min(rightSide, leftSide);
}
