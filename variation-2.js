var assert = require('assert')
const { test } = require('node:test')

function nestedAdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (Array.isArray(current)) {
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}

const testCase = [1, 2, [1, 3, [2, [1, [6]]]]]
test('nestedAdd()', () => {
	assert.equal(nestedAdd(testCase), 16)
})