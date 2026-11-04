
const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../src/index');

test('greet returns a greeting for a name', () => {
  assert.strictEqual(greet('Priyanshu'), 'Hello, Priyanshu!');
});

test('greet handles empty input', () => {
  assert.strictEqual(greet(''), 'Hello, !');
});
