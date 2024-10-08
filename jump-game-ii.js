/*
  45. Jump Game II
  You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
  Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

  0 <= j <= nums[i] and
  i + j < n
  Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

  Example 1:
  Input: nums = [2,3,1,1,4]
  Output: 2
  Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
  
  Example 2:
  Input: nums = [2,3,0,1,4]
  Output: 2
  
  Constraints:

  1 <= nums.length <= 104
  0 <= nums[i] <= 1000
  It's guaranteed that you can reach nums[n - 1].
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jump = function (nums) {
  let res = 0;
  let curEnd = 0;
  let nextEnd = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + i > nextEnd) nextEnd = nums[i] + i;

    if (i === curEnd) {
      curEnd = nextEnd;
      res++;
    }
  }

  return res;
};

console.log(jump([2, 3, 4, 1, 2, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
console.log(jump([2, 3, 1, 2, 1, 4]));

/* 
  NOTE: The fastest solution [same as mine except a few differences]:

  var jump = function(nums) {
    if (nums.length === 1) return 0;

    let prev = 0, max = 0, jump = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
      max = Math.max(max, i + nums[i]);

      if (i === prev) {
          jump++;
          prev = max;
      }
      
    }

    return jump;
  };
*/

/* 
  NOTE: BFS solution

  var jump = function(nums) {
    let left = 0;
    let right = 0;
    let res = 0;

    while(right<nums.length-1){
        let max = 0;

        for(let i = left; i<=right;i++){
            max = Math.max(nums[i]+i,max)
        }
        left = right+1;
        right = max;

        res++
    }
    return res;
  };
*/
