let assert = require('tressa');
let cases = require('./test-cases');

let ___ = require("lodash").___;

assert.title('___');

for (let cond of cases) {
	assert(___(cond.args...) === cond.expected, cond.message);
};


