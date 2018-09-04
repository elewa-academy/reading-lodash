const assert = require('tressa');
const cases = require('./test-cases.js');

const ____refactor = require("../3-___-refactor.js");

assert.title('___-refactor');

for (let cond of cases) {
	assert(____refactor(...cond.input) === cond.expected, cond.message);
};


