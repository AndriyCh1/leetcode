/*
  6. Zigzag Conversion
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

  P   A   H   N
  A P L S I I G
  Y   I   R

  And then read line by line: "PAHNAPLSIIGYIR"
  Write the code that will take a string and make this conversion given a number of rows:
  string convert(string s, int numRows);
  
  Example 1:
  Input: s = "PAYPALISHIRING", numRows = 3
  Output: "PAHNAPLSIIGYIR"

  Example 2:
  Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"
  Explanation:

  P     I    N
  A   L S  I G
  Y A   H R
  P     I

  Example 3:
  Input: s = "A", numRows = 1
  Output: "A"

  Constraints:
  1 <= s.length <= 1000
  s consists of English letters (lower-case and upper-case), ',' and '.'.
  1 <= numRows <= 1000
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let res = "";
  for (let i = 0; i < numRows; i++) {
    let incr = 2 * (numRows - 1);
    for (j = i; j < s.length; j += incr) {
      res += s[j];
      if (i > 0 && i < numRows - 1 && j + incr - 2 * i < s.length) {
        res += s[j + incr - 2 * i];
      }
    }
  }

  return res;
};

console.log(convert("ABC", 3) === "ABC");
console.log(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
console.log(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
console.log(convert("A", 1) === "A");
/* 
  NOTE: The fastest solution:

  var convert = function(s, numRows) {
    if (numRows == 1 || numRows >= s.length) {
        return s;
    }

    let res = Array(numRows).fill('');
    let index = 0, step = 1;

    for (let char of s) {
        res[index] += char;
        if (index == 0) {
            step = 1;
        } else if (index == numRows -1) {
            step = -1;
        }
        index += step;
    }

    return res.join('');
  };
*/
