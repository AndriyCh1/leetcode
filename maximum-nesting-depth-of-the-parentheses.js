/*  
  1614. Maximum Nesting Depth of the Parentheses

  Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

  Example 1:
  Input: s = "(1+(2*3)+((8)/4))+1"
  Output: 3
  Explanation:
  Digit 8 is inside of 3 nested parentheses in the string.

  Example 2:
  Input: s = "(1)+((2))+(((3)))"
  Output: 3
  Explanation:
  Digit 3 is inside of 3 nested parentheses in the string.

  Example 3:
  Input: s = "()(())((()()))"
  Output: 3

  Constraints:

  1 <= s.length <= 100
  s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
  It is guaranteed that parentheses expression s is a VPS.
*/

/**
 * @param {string} s
 * @return {number}
 */

// NOTE: Memory-optimized solution - Time complexity: O(n). Space complexity: O(1)
var maxDepth = function (s) {
  let depth = 0;
  let maxDepth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") depth++;
    if (s[i] === ")") depth--;
    if (depth > maxDepth) maxDepth = depth;
  }

  return maxDepth;
};

// NOTE: More proper solution since it uses stack
// var maxDepth = function (s) {
//   let depth = 0;
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       stack.push("(");
//       continue;
//     }

//     if (s[i] === ")") {
//       if (depth < stack.length) {
//         depth = stack.length;
//       }

//       stack.pop();
//     }
//   }

//   return depth;
// };

console.log(maxDepth("(1)+((2))+(((3)))"));
console.log(maxDepth("()(())((()()()))"));

/* 
  NOTE: The fastest solution:

  var maxDepth = function(s) {
   let depth = 0;
   let max = 0;
   for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      depth++;
    }
    if (s[i] === ")") {
      depth--;
    }
    if (max < depth) {
      max = depth;
    }
   }
   return max;
};
*/
