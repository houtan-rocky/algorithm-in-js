var assert = require('assert')
const { test } = require('node:test')

function nestedAddition(input) {
	if (typeof input === 'number') {
		return input
	}

	let res = 0
	for (m of input) {
		res += nestedAddition(m)
	}
	return res
}

const testCase = [1, 2, [1, 3, [2, [1, [6]]]]]
test('nestedAddition()', () => {
	assert.equal(nestedAddition(testCase), 16)
})
