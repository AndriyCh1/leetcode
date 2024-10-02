// https://leetcode.com/problems/merge-intervals/description/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  if (!intervals.length) {
    return [];
  }

  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Store merged intervals
  const merged = [intervals[0]];

  // Iterate over intervals
  for (let i = 1; i < intervals.length; i++) {
    // Get last merged interval
    const lastMerged = merged.at(-1);

    // Check if current interval can be merged with the last merged interval
    if (intervals[i][0] <= lastMerged[1]) {
      // Merge intervals
      merged[merged.length - 1] = [
        lastMerged[0],
        Math.max(lastMerged[1], intervals[i][1]),
      ];
    } else {
      // If current interval is not intersecting, add it to the merged array
      merged.push(intervals[i]);
    }
  }

  return merged;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
