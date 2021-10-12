/**
In this challenge, you are required to calculate and print 
the sum of the elements in an array, keeping in mind that 
some of thoseintegersmay be quite large.

Function Description
Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers 

Input: 1000000001 1000000002 1000000003 1000000004 1000000005
Output: 5000000015
 */

function aVeryBigSum(ar) {
  // Write your code here
  var result = 0;

  for (let i = 0; i < ar.length; i++) {
    result = result + ar[i];
  }
  return result;
}

// aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]);
