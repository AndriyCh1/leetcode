/*
2032. Two Out of Three

Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

Example 1:
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.

Example 2:
Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.

Example 3:
Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
 

Constraints:

1 <= nums1.length, nums2.length, nums3.length <= 100
1 <= nums1[i], nums2[j], nums3[k] <= 100

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const num1Set = new Set(nums1);
  const num2Set = new Set(nums2);
  const num3Set = new Set(nums3);

  const result = [];

  for (let i = 0; i <= 100; i++) {
    if (num1Set.has(i) + num2Set.has(i) + num3Set.has(i) >= 2) {
      result.push(i);
    }
  }

  return result;
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));

/* NOTE: The fastest solution:

var twoOutOfThree = function(nums1, nums2, nums3) {
  let a=nums1.filter(x=>nums2.includes(x))
  let b=nums1.filter(x=>nums3.includes(x))
  let c=nums2.filter(x=>nums3.includes(x))
  return Array.from(new Set([...a,...b,...c]))
};

*/
