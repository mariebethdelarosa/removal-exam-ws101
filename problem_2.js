const assert = require('node:assert');

function findTwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

function runTest(id, nums, target, expected) {
  try {
    const result = findTwoSum(nums, target);
    assert.deepStrictEqual(result, expected);
    console.log(`Test ${id} Passed`);
  } catch (err) {
    console.error(`Test ${id} Failed`);
  }
}

console.log("Starting Two Sum Tests...\n");

runTest(1, [2,7,11,15], 9, [0,1]);
runTest(2, [3,2,4], 6, [1,2]);

console.log("\nTests Completed.");