/*
  2574. Left and Right Sum Differences
  Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

  answer.length == nums.length.
  answer[i] = |leftSum[i] - rightSum[i]|.
  Where:

  leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
  rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
  Return the array answer.

  
  Example 1:
  Input: nums = [10,4,8,3]
  Output: [15,1,11,22]
  Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
  The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
  
  Example 2:
  Input: nums = [1]
  Output: [0]
  Explanation: The array leftSum is [0] and the array rightSum is [0].
  The array answer is [|0 - 0|] = [0].
  
  Constraints:
  1 <= nums.length <= 1000
  1 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  let leftSum = 0;
  const total = nums.reduce((a, b) => a + b, 0);
  const res = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    res[i] = Math.abs(leftSum - (total - leftSum - nums[i]));
    leftSum += nums[i];
  }

  return res;
};

console.log(leftRightDifference([10, 4, 8, 3]));
console.log(leftRightDifference([10]));
console.log(leftRightDifference([]));

/* 
  NOTE: The fastest solution:

  var leftRightDifference = function(nums) {
    let answer = [];
    let leftSum = 0;
    let rightSum = 0;
    let right = [];
    let left = [0];

    for (let i = 0; i < nums.length; i++) {
      rightSum += nums[i];
      leftSum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
      rightSum = Math.abs(rightSum - nums[i]);
      right[i] = rightSum;
    }

    for (let i = nums.length - 1; i >= 1; i--) {
      leftSum = Math.abs(leftSum - nums[i]);
      left[i] = leftSum;
    }

    right[nums.length - 1] = 0;

    for (let i = 0; i < nums.length; i++) {
      answer[i] = Math.abs(left[i] - right[i]);
    }
    return answer;
  };
*/
