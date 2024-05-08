/*

  2859. Sum of Values at Indices With K Set Bits
  You are given a 0-indexed integer array nums and an integer k.
  Return an integer that denotes the sum of elements in nums whose corresponding indices have exactly k set bits in their binary representation.
  The set bits in an integer are the 1's present when it is written in binary.
  For example, the binary representation of 21 is 10101, which has 3 set bits.

  Example 1:
  Input: nums = [5,10,1,5,2], k = 1
  Output: 13
  Explanation: The binary representation of the indices are: 
  0 = 0002
  1 = 0012
  2 = 0102
  3 = 0112
  4 = 1002 
  Indices 1, 2, and 4 have k = 1 set bits in their binary representation.
  Hence, the answer is nums[1] + nums[2] + nums[4] = 13.

  Example 2:
  Input: nums = [4,3,2,1], k = 2
  Output: 1
  Explanation: The binary representation of the indices are:
  0 = 002
  1 = 012
  2 = 102
  3 = 112
  Only index 3 has k = 2 set bits in its binary representation.
  Hence, the answer is nums[3] = 1.
  

  Constraints:
  1 <= nums.length <= 1000
  1 <= nums[i] <= 105
  0 <= k <= 10

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0;
  const maxBinaryLength = 10; // 1111101000 (2) = 1000 (10) - constraint

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < maxBinaryLength; j++) {
      count += (i >> j) & 1;
    }

    if (count === k) sum += nums[i];
  }

  return sum;
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));

/* 
  NOTE: The fastest solution: 

  var sumIndicesWithKSetBits = function(nums, k) {
    return nums.reduce((total, value, index) => {
        let binaryStr = index.toString(2);
        let count = 0;
        for (let i = 0; i < binaryStr.length; i++) {
            if (binaryStr[i] === "1") {
                count++;
            }
            if (count > k) {
                return total;
            }
        }
        if (count == k) {
            return total + value;
        }
        return total;
    }, 0);
  };

*/
