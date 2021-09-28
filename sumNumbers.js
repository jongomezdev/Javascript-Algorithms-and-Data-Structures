function sumNumbers(nums) {
  let result = 0;
  // for (number of nums) {
  //   result = result + number;
  // }
  for (let i = 0; i < nums.length; i++) {
    result = result + nums[i];
  }
  return result;
}

console.log(sumNumbers([1, 3, 10, 50]));
