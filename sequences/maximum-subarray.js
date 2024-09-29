// https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    maxSum = curSum > maxSum ? curSum : maxSum;

    if (curSum < 0) {
      curSum = 0;
    }
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([1, 2]));
