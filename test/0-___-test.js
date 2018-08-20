const assert = require('tressa');

const cases = require('./test-cases');

const ___ = require("../0-___-test.js");

assert.title('___');

for (let cond of cases) {
	assert(___(...cond.input) === cond.expected, cond.message);
};


