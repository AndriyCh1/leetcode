// https://leetcode.com/problems/container-with-most-water/description/
/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let maxVolume = 0;

  while (leftPointer !== rightPointer) {
    const width = rightPointer - leftPointer;

    let volume;

    if (heights[leftPointer] < heights[rightPointer]) {
      volume = heights[leftPointer] * width;
      leftPointer++;
    } else {
      volume = heights[rightPointer] * width;
      rightPointer--;
    }

    if (volume > maxVolume) {
      maxVolume = volume;
    }
  }

  return maxVolume;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
