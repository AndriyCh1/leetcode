// https://leetcode.com/problems/valid-anagram/description/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++; // alphabets ASCII codes start from 'a' = 97
    count[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
