const assert = require('tressa');
const cases = require('./test-cases');

const ____tracible = require("./4-___-tracible-test.js");

assert.title('____tracible');

for (let cond of cases) {
	assert(____tracible(cond.args...) === cond.expected, 
		[cond.message, ____tracible(cond.args..., true)]);
};


