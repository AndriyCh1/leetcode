/*
  169. Majority Element

  Given an array nums of size n, return the majority element.
  The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

  Example 1:
  Input: nums = [3,2,3]
  Output: 3

  Example 2:
  Input: nums = [2,2,1,1,1,2,2]
  Output: 2
  
  Constraints:

  n == nums.length
  1 <= n <= 5 * 104
  -109 <= nums[i] <= 109
  

  Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/** NOTE: Moore voting algorithm */
var majorityElement = function (nums) {
  let count = 1;
  let candidate = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (candidate === nums[i]) count++;
    else {
      count--;
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      }
    }
  }

  return candidate;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([5, 3, 5, 2, 5, 4, 5]));

/* 
  NOTE: The fastest solution:
  var majorityElement = function(nums) {
    let n = nums.length;
    
    let cnt = 1;
    let e = nums[0]
    for(let i=1; i<n; i++) {
        if(nums[i] == e) {
            cnt++;
        } else {
            cnt--;
        }
        if(cnt < 0) {
            e = nums[i];
            cnt = 1;
        }
    }
    
    return e;
  };
*/
