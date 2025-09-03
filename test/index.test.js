const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/index');

test('greet returns greeting message', () => {
  assert.strictEqual(greet('World'), 'Hello, World!');
});
