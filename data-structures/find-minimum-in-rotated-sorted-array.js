// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const middleNum = nums[mid];
    const leftNum = nums[left];
    const rightNum = nums[right];

    // If far left is less than far right, then far left is our target
    if (leftNum < rightNum) return leftNum;

    // If greater values to the left
    if (leftNum <= middleNum) left = mid + 1;

    // If greater values to the right
    if (middleNum < leftNum) right = mid;
  }

  return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
