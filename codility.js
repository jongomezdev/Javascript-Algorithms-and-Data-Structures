// Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A = A.filter((x) => x >= 1).sort((a, b) => a - b);

  let x = 1;

  for (let i = 0; i < A.length; i++) {
    if (x < A[i]) {
      return x;
    }
    x = A[i] + 1;
  }
  return x;
}

/**
 * There is a road consisting of N segments, numbered from 0 to N-1,
 * represented by a string S. Segment S[K]
 * of the road may contain a pothole, denoted by a single uppercase "x" character,
 * or may be a good segment without any potholes, denoted by a single dot, ".".
 *
 * For example, string ".X..X" means that there are two potholes in total in the road:
 * one is located in segment S[1] and one in segment S[4]. All other segments are good.
 *
 * The road fixing machine can patch over three consecutive segments at once with
 * asphalt and repair all the potholes located within each of these segments. Good or
 * already repaired segments remain good after patching them.
 * segments remain good after patching them.
 *
 * Your task is to compute the minimum number of patches required to repair all
 * the potholes in the road.
 *
 * Write a function: funciton solution(A) that, given a string S of length N, returns
 * the minimum number of patches required to repair all the potholes.
 *
 * Examples:
 *
 * 1. Given S = ".X..X", your function should return 2. The road fixing machine could,
 * patch for example, segments 0-2 and 2-4.
 *
 * 2.
 */
