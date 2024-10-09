// https://leetcode.com/problems/longest-repeating-character-replacement/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const CHAR_CODE_OF_UPPERCASE_A = "A".charCodeAt(0);

function getLetterIndex(letter) {
  return letter.charCodeAt(0) - CHAR_CODE_OF_UPPERCASE_A;
}

var characterReplacement = function (s, k) {
  const lettersCount = new Array(26).fill(0);
  let maxLength = 0;
  let windowLeftIdx = 0;
  let windowRightIdx = 0;
  let maxLetterCount = 0;

  while (windowRightIdx !== s.length) {
    const letterIdx = getLetterIndex(s[windowRightIdx]);
    lettersCount[letterIdx]++;
    // const maxLetterCount = Math.max(...lettersCount);
    maxLetterCount = Math.max(maxLetterCount, lettersCount[letterIdx]);

    if (windowRightIdx - windowLeftIdx + 1 > maxLetterCount + k) {
      lettersCount[getLetterIndex(s[windowLeftIdx])]--;
      windowLeftIdx++;
    } else {
      maxLength = Math.max(maxLength, windowRightIdx - windowLeftIdx + 1);
    }

    windowRightIdx++;
  }

  return maxLength;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
