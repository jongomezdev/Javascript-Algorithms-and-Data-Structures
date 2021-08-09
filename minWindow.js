// https://leetcode.com/problems/minimum-window-substring/


const minWindow = function(s, t) {   
    const targetMap = {};  // Dictionary to track chars + count of string t
    let left = 0,
         right = 0;
    let charCounter = t.length;  // total number of chars we're looking for
    let minWidth = Number.MAX_SAFE_INTEGER;
    let minLeft = 0,   // To track the minimum window limits
        minRight = 0;
  
    for(let char of t){ // Populate the map with chars of t with # of occurrences
      targetMap[char] = targetMap[char] == null? 1 : targetMap[char]+1;
    }
  
    while(right < s.length) { // Continue incrementing the right side of the window until it hits the end of the string
      let currEndingChar = s.charAt(right);
      // if char is in map and # of occurrence is > 0, decrease charCounter
      if(currEndingChar in targetMap){
        if(targetMap[currEndingChar] > 0) charCounter--;
        targetMap[currEndingChar]--;  // it can be negative at times, meaning we have duplicates of a target char in our window
      }
  
      /**
       * We only go in this loop when we have a found a valid window (all target chars)
       */
      while(charCounter === 0){
        if(right-left < minWidth){  // first update the min references if the current right and left pointer are smaller
          minWidth = right - left + 1;
          minLeft = left;
          minRight = right;
        }
  
        let charToDrop = s.charAt(left);  // char to drop from the left as we're looking to shrink the window
        /**
         * Before dropping, check if char is in targetMap. If it is, then we to increase the # occurrences for that char in the map and if the count is > 0, increase the charCounter. Meaning we no longer have our target string in the window and we need to move 'right' forward to find the next valid window (in the next iteration of the top while loop)
         */
        if(charToDrop in targetMap){
          targetMap[charToDrop]++;
          if(targetMap[charToDrop] > 0){
            charCounter++;
          }
        }
        left++;
      }
      right++;
    }
    return minWidth === Number.MAX_SAFE_INTEGER ? '': s.substring(minLeft, minRight+1);
  };