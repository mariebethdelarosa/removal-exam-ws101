const assert = require('node:assert');

function isValidParentheses(str) {
  let stack = []
  let map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
    } else {
      if (stack.pop() !== map[char]) {
        return false
      }
    }
  }

  return stack.length === 0
}

function runTest(id, input, expected) {
  try {
    const result = isValidParentheses(input);
    assert.strictEqual(result, expected);
    console.log(`Test ${id} Passed: "${input}" => ${expected}`);
  } catch (err) {
    console.error(`Test ${id} Failed`);
  }
}

console.log("Starting Parentheses Validation Tests...\n");

runTest(1, "()", true);
runTest(2, "[]", true);
runTest(3, "{}", true);
runTest(4, "()[]{}", true);
runTest(5, "{[()]}", true);

console.log("\nTests Completed.");