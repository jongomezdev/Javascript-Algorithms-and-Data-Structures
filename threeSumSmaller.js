/**Input: nums = [-2,0,1,3], target = 2
Output: 2
Explanation: Because there are two 
triplets which sums are less than 2:
[-2,0,1]
[-2,0,3]
*/

function threeSumSmaller(nums, target) {
  if (nums.length < 3) return 0;
  nums.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    // Start the other 2 pointers at opposite ends from each other
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const [val1, val2, val3] = [nums[i], nums[j], nums[k]];
      const windowSum = val1 + val2 + val3;

      if (windowSum < target) {
        count += k - j;
        j++;
      } else {
        k--;
      }
    }
  }
  return count;
}
