/*
  14. Longest Common Prefix
  
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".

  Example 1:
  Input: strs = ["flower","flow","flight"]
  Output: "fl"

  Example 2:
  Input: strs = ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.
  

  Constraints:
  1 <= strs.length <= 200
  0 <= strs[i].length <= 200
  strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

// NOTE: JS string methods are much faster than manual iterations
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  let length = prefix.length;

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, --length);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flght"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["dog"]));

// NOTE: Speed test
// function testSpeed() {
//   const start = performance.now();

//   for (let i = 0; i < 10000; i++) {
//     longestCommonPrefix(["flower", "flow", "flight"]);
//   }

//   const end = performance.now();
//   const time = end - start;

//   console.log("Performance: ", time);
// }

/* 
  NOTE: The fastest solution:
  var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; 

    let prefix = strs[0]; 

    for (let i = 1; i < strs.length; i++) {
        
        while (strs[i].indexOf(prefix) !== 0) {
            
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix; 
  };
*/
