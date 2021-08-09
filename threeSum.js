// https://leetcode.com/problems/3sum/

// Given an integer array nums, return all the triplets
//[nums[i], nums[j], nums[k]] such that i != j, i != k,
// and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
const triplets = [];

for(let i = 0; i < nums.length - 2; i++){
    if(nums[i] != nums[i-1]){  
        let left = i + 1;
      let right = nums.length - 1;

        while (left < right){
            const currentSum = nums[i] + nums[left] + nums[right];
            if (currentSum === 0){
                triplets.push([nums[i], nums[left], nums[right]]);
               while(nums[left] === nums[left + 1]) left ++
                while(nums[right] === nums[right - 1]) right --   
                left ++;
                right --;
                }
             else if(currentSum < 0) {
                left ++
            } 
            else{
                right --
            }
        }
    }
}
return triplets
}
function compare(a,b){
    return a-b
}