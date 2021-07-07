/**
 * There is a road consisting of N segments, numbered from 0 to N-1,
 * represented by a string S. Segment S[K] of the road may contain
 * a pothole, denoted by a single uppercase  "X" character, or may
 * be a good segment without any potholes, denoted by a single dot, "."
 */

/**
 * For example, string ".X..X" means that there are two potholes in
 * total in the road: one is located in segment S[1] and one in segment S[4]
 * All other segments are good.
 */

/**
 * The road fixing machine can patch over three consecutive segments at once
 * with asphalt and repair all the potholes located within each of these segments.
 * Good or already repaired segments remain good after patching them.
 */

/**
 * Your task is to compute the minimum number of patches required to
 * repair all the potholes in the road.
 */

// total length of string
// total number of X's
// divide by 3

// const solution = (S) => {
//   let stringLength = S.length;

//   if (stringLength <= 0) return undefined;

//   let string = S.match(/[X]/g);
//   let result = Math.round(stringLength / 3);

//   console.log(result, 'hello');

//   console.log(string);
//   return;
// };

const solution = (S) => {
  if (S.length <= 0) return undefined;
  let length = S.length;
  let string = S.match(/[.]/g);
  let potHoleNum = Math.round(length / string.length);
  return potHoleNum;
};

solution('.X..X');
