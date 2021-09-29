//=====================================================================================
// Write a function to take an array of integers and return the minimum
// number of increments required across the array to ensure that every number is unique
// =====================================================================================

// Understand the problem
// ex arr = [3,2,1,2,1,7]

// Break it down
// we need to iterate through the indexes of an array
// we need incrememnt each value to make the indexes unique
//

// return a minimum or maximum will usually need a counter

const minIncrement = (nums) => {
  var uniqueNums = {};
  var increments = 0;

  for (var i = 0; i < nums.length; i++) {
    while (uniqueNums[nums[i]] === true) {
      nums[i] += 1;
      increments++;
    }
    uniqueNums[nums[i]] = true;
  }
  return increments;
};
