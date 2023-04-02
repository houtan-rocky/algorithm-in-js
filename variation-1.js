var assert = require('assert')
const { test } = require('node:test')

function nestedAdd(input) {
	if (typeof input === 'number') {
		return input
	}

	let res = 0
	for (let m of input) {
		res += nestedAdd(m)
	}
	return res
}

const testCase = [1, 2, [1, 3, [2, [1, [6]]]]]
test('nestedAdd()', () => {
	assert.equal(nestedAdd(testCase), 16)
})