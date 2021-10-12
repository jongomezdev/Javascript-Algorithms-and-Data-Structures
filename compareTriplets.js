/**
Alice and Bob each created one problem for HackerRank. A reviewer 
rates the two challenges, awarding points on a scale from 1 to 100 
for three categories: problem clarity, originality, and difficulty.
The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), 
and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]). 
 */

function compareTriplets(a, b) {
  // Write your code here
  if (a.length !== b.length) return null;

  let points = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      points[0]++;
    } else if (a[i] != b[i]) {
      points[1]++;
    }
  }
  return points;
}

console.table(compareTriplets([5, 6, 7], [3, 6, 10]));
