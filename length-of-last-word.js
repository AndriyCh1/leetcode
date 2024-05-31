/* 

  58. Length of Last Word

  Given a string s consisting of words and spaces, return the length of the last word in the string.
  A word is a maximal substring consisting of non-space characters only.

  Example 1:
  Input: s = "Hello World"
  Output: 5
  Explanation: The last word is "World" with length 5.

  Example 2:
  Input: s = "   fly me   to   the moon  "
  Output: 4
  Explanation: The last word is "moon" with length 4.

  Example 3:
  Input: s = "luffy is still joyboy"
  Output: 6
  Explanation: The last word is "joyboy" with length 6.
  

  Constraints:

  s consists of only English letters and spaces ' '.
  There will be at least one word in s.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0;
  let endIdx = s.length - 1;

  while (endIdx >= 0) {
    if (s[endIdx] !== " ") length++;
    if (s[endIdx] === " " && length) break;
    endIdx--;
  }

  return length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

/* 
  NOTE: The fastest solution:
  
  let lengthOfLastWord = function(s) {
    let noSpace = s.trim()

    let arrayOfLetters = noSpace.split(" ")

    let finalWord = arrayOfLetters.pop()
    
    return finalWord.length
};
*/
