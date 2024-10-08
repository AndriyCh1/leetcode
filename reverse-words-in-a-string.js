/*
  151. Reverse Words in a String
  Given an input string s, reverse the order of the words.
  A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
  Return a string of the words in reverse order concatenated by a single space.
  Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

  Example 1:
  Input: s = "the sky is blue"
  Output: "blue is sky the"

  Example 2:
  Input: s = "  hello world  "
  Output: "world hello"
  Explanation: Your reversed string should not contain leading or trailing spaces.

  Example 3:
  Input: s = "a good   example"
  Output: "example good a"
  Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
  
  Constraints:

  1 <= s.length <= 104
  s contains English letters (upper-case and lower-case), digits, and spaces ' '.
  There is at least one word in s.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // NOTE: Version 1:  Manual iteration
  s = s.trim();
  let res = "";
  let endIdx = -1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " " && endIdx === -1) {
      endIdx = i;
      continue;
    }

    if (s[i] === " ") {
      if (endIdx !== -1) res += s.slice(i + 1, endIdx + 1) + " ";
      endIdx = -1;
    }
  }
  return endIdx !== -1 ? res + s.slice(0, endIdx + 1) : res;

  // NOTE: Version 2:  Using split and filter
  // return s.split(" ").filter(w => w !== "").reverse().join(" ");
};

console.log(`|${reverseWords("the sky is blue")}|`);
console.log(`|${reverseWords("  hello world  ")}|`);

/* 
  NOTE: The fastest solution:
  var reverseWords = function(s) {
    let arr = s.split(' ');
    arr = arr.filter(word => word !== '');
    arr = arr.reverse().join(' ');
    return arr
  };
*/
