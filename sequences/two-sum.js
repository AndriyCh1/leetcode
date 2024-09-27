// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  const valueIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (valueIndexMap.has(difference)) {
      return [valueIndexMap.get(difference), i];
    }

    valueIndexMap.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
