let assert = require('tressa');
let cases = require('./test-cases');

let ____chunked = require("./2-___-chunked.js");

assert.title('___-chunked');

for (let cond of cases) {
	assert(____chunked(cond.args...) === cond.expected, cond.message);
};


