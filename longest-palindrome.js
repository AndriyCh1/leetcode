/* 409. Longest Palindrome
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 
Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only. */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const lettersCount = new Map();
  let evenCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (lettersCount.has(s[i])) {
      const count = lettersCount.get(s[i]) + 1;
      if (count % 2 === 0) evenCount += 2;
      lettersCount.set(s[i], count);
      continue;
    }

    lettersCount.set(s[i], 1);
  }

  return s.length > evenCount ? evenCount + 1 : evenCount;
};

console.log(longestPalindrome("abcccccdad"));
console.log(longestPalindrome("a"));

/* NOTE: The fastest solution:

var longestPalindrome = function(s) {
  const charCounts = new Map();
  let numOddChars = 0;

  for (let char of s) {
      const count = charCounts.get(char) || 0;
      charCounts.set(char, count + 1);

      numOddChars = ((count + 1) % 2 === 1) ? numOddChars + 1 : numOddChars - 1;
  }

  // let hasOddCount = false;
  // let length = 0;

  // for (let count of charCounts.values()) {
  //     if (count % 2 === 0) {
  //         length += count;
  //     } else {
  //         hasOddCount = true;
  //         length += count - 1;
  //     }
  // }

  return numOddChars > 0 ? s.length - (numOddChars - 1) : s.length;
};


*/
