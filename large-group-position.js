/* 

830. Positions of Large Groups

In a string s of lowercase letters, these letters form consecutive groups of the same character.
For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
A group is considered large if it has 3 or more characters.
Return the intervals of every large group sorted in increasing order by start index.
 

Example 1:
Input: s = "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the only large group with start index 3 and end index 6.


Example 2:
Input: s = "abc"
Output: []
Explanation: We have groups "a", "b", and "c", none of which are large groups.

Example 3:
Input: s = "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
Explanation: The large groups are "ddd", "eeee", and "bbb".
 

Constraints:
1 <= s.length <= 1000
s contains lowercase English letters only. */

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  if (!s.length) return [];

  let current = s[0];
  let startIndex = 0;

  const intervals = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== current) {
      if (i - startIndex >= 3) {
        intervals.push([startIndex, i - 1]);
      }

      current = s[i];
      startIndex = i;
      continue;
    }
  }

  if (s.length - startIndex >= 3) {
    intervals.push([startIndex, s.length - 1]);
  }

  return intervals;
};

console.log(largeGroupPositions("abbxxxxzzy"));
console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
console.log(largeGroupPositions("aaa"));

/*

NOTE: The fastest solution:

var largeGroupPositions = function(s) {
  
  let res = []
  let start = 0
  for(let i=1;i<=s.length;i++) {
      if(s[i]!=s[i-1]||i==s.length) {
          if(((i-1)-start)+1>=3) {
              res.push([start,i-1])
              start = i
          } else {
              start = i
          }
      }
  }
  return res
};

*/
