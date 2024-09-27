// https://leetcode.com/problems/valid-parentheses/description/
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const bracketsMatch = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (stack.length && bracketsMatch[s[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
};

console.log(isValid("()[]{}"));
console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
