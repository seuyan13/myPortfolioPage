var vibrant = require('../'),
    assert = require('assert'),
    test_vib = vibrant(1, check_args, fake_timer),
    count = 1

test_vib.write([1, 1])

function check_args(arg) {
  if (count === 1) {
    assert.deepEqual(arg, [1, 1])
    test_vib.write([2, 2])
  }

  if (count === 2) {
    assert.deepEqual(arg, [2, 2])
    test_vib.write(3)
  }

  if (count === 3) assert.strictEqual(arg, 3)

  count++
}

function fake_timer(fn, time) {
  if (count === 2) assert.strictEqual(time, 2)
  if (count === 3) assert.strictEqual(time, 4)
  if (count === 4) assert.strictEqual(time, 4)

  fn()
}
