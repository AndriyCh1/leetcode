/*
  189. Rotate Array
  Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

  Example 1:
  Input: nums = [1,2,3,4,5,6,7], k = 3
  Output: [5,6,7,1,2,3,4]
  Explanation:
  rotate 1 steps to the right: [7,1,2,3,4,5,6]
  rotate 2 steps to the right: [6,7,1,2,3,4,5]
  rotate 3 steps to the right: [5,6,7,1,2,3,4]
  
  Example 2:
  Input: nums = [-1,-100,3,99], k = 2
  Output: [3,99,-1,-100]
  Explanation: 
  rotate 1 steps to the right: [99,-1,-100,3]
  rotate 2 steps to the right: [3,99,-1,-100]
  
  Constraints:
  1 <= nums.length <= 105
  -231 <= nums[i] <= 231 - 1
  0 <= k <= 105

  Follow up:

  Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
  Could you do it in-place with O(1) extra space?
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// NOTE: Solution 1 - unshift + splice - extra space due to splices
// var rotate = function (nums, k) {
//   nums.unshift(...nums.splice(nums.length - k, k));
// };

//  NOTE: Solution 2 - extra in-place space used
// var rotate = function (nums, k) {
//   let length = nums.length;

//   for (let i = 1; i <= k; i++) {
//     nums.push(nums[length - i]);
//   }

//   for (let i = nums.length - k - 1; i >= k; i--) {
//     nums[i] = nums[i - k];
//   }

//   for (let i = 0; i < k; i++) {
//     nums[i] = nums.pop();
//   }
// };

// NOTE: Solution 3 - reversing
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function reverse(arr, i, j) {
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}
var rotate = function (nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);

const nums2 = [1, 2, 3];
rotate(nums2, 4);
console.log(nums2);

/* 
  NOTE: The fastest solution:

  var rotate = function(nums, k) {
    let length = nums.length;

    if(length<=2)
    {
        for(let i=0;i<k;i++)
        {
            nums.unshift(nums[length-1]);
            nums.pop();
        }
    } else {
        let arr = nums.splice(length-k);
        nums.unshift(...arr);
    }
};
*/
